"use client";

import { store } from "@/store/store";
import * as React from "react";
import { Provider } from "react-redux";

export const QueryProvider = (props: { children: React.ReactNode }) => {
  return <Provider store={store}>{props.children}</Provider>;
};
