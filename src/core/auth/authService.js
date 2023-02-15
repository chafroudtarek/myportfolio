import axios from "axios";
import authDefaultConfig from "./authConfig";

export default class JwtService {
  authConfig = { ...authDefaultConfig };

  isAlreadyFetchingAccessToken = false;

  // For Refreshing Token
  subscribers = [];

  constructor(jwtOverrideConfig) {
    this.authConfig = { ...this.authConfig, ...jwtOverrideConfig };

    // ** Request Interceptor
    axios.interceptors.request.use(
      (config) => {
        // Get token from localStorage
        const accessToken = this.getToken();

        //  If token is present add it to request's Authorization Header
        if (accessToken) {
          config.headers.Authorization = `${this.authConfig.tokenType} ${accessToken}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    axios.interceptors.response.use(
      (response) => response,
      (error) => {
        const { config, response } = error;
        const originalRequest = config;

        if (response && response.status === 401) {
          if (!this.isAlreadyFetchingAccessToken) {
            this.isAlreadyFetchingAccessToken = true;
            this.refreshToken().then((r) => {
              this.isAlreadyFetchingAccessToken = false;

              //  Update accessToken in localStorage
              this.setToken(r.data.accessToken);
              this.setRefreshToken(r.data.refreshToken);

              this.onAccessTokenFetched(r.data.accessToken);
            });
          }
          const retryOriginalRequest = new Promise((resolve) => {
            this.addSubscriber((accessToken) => {
              // ** Make sure to assign accessToken according to your response.
              // ** Change Authorization header
              originalRequest.headers.Authorization = `${this.authConfig.tokenType} ${accessToken}`;
              resolve(this.axios(originalRequest));
            });
          });
          return retryOriginalRequest;
        }
        return Promise.reject(error);
      }
    );
  }

  onAccessTokenFetched(accessToken) {
    this.subscribers = this.subscribers.filter((callback) =>
      callback(accessToken)
    );
  }

  addSubscriber(callback) {
    this.subscribers.push(callback);
  }

  getToken() {
    return localStorage.getItem(this.authConfig.storageTokenKeyName);
  }

  getRefreshToken() {
    return localStorage.getItem(this.authConfig.storageRefreshTokenKeyName);
  }

  setToken(value) {
    localStorage.setItem(this.authConfig.storageTokenKeyName, value);
  }

  setRefreshToken(value) {
    localStorage.setItem(this.authConfig.storageRefreshTokenKeyName, value);
  }

  login(...args) {
    return axios.post(this.authConfig.loginEndpoint, ...args);
  }

  register(...args) {
    return axios.post(this.authConfig.registerEndpoint, ...args);
  }

  refreshToken() {
    return axios.post(this.authConfig.refreshEndpoint, {
      refreshToken: this.getRefreshToken(),
    });
  }
}
