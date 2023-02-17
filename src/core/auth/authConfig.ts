export interface configType {
  loginEndpoint: string;
  registerEndpoint: string;
  refreshEndpoint: string;
  logoutEndpoint: string;
  storageRefreshTokenKeyName: string;
  tokenType: string;
  storageTokenKeyName: string;
}

const config = {
  loginEndpoint: "/auth/login",
  registerEndpoint: "/auth/signup",
  refreshEndpoint: "/auth/refresh-token",
  logoutEndpoint: "/auth/logout",
  storageRefreshTokenKeyName: "",
  //Bearer
  tokenType: "Bearer",

  //in localstorage
  storageTokenKeyName: "token",
};

export default config;
