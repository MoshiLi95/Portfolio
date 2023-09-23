import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import contactFormReducer from "./ContactFormSlice";

export const store = configureStore({
  reducer: { contactFormReducer },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootStateI = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootStateI> = useSelector;
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
