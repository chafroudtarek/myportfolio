import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";

const middleware = [
  ...getDefaultMiddleware({ serializableCheck: false }),
  logger,
];

const store = configureStore({
  reducer: {},
  middleware,
  devTools: process.env.REACT_APP_BASE_NODE_ENV !== "production",
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
