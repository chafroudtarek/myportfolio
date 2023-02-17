import authService from "./authService";

export default function useAuth(jwtOverrideConfig: any) {
  const jwt = new authService(jwtOverrideConfig);

  return {
    jwt,
  };
}




