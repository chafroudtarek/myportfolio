import { DefaultRoute } from "../router/routes";

export const isUserLoggedIn = () => localStorage.getItem("token");

export const getHomeRouteForLoggedInUser = (userRole) => {
  if (userRole === "admin") return DefaultRoute;
  if (userRole === "client") return "/access-control";
  return "/login";
};
