"use client";
import { ReactNode, useRef } from "react";
import { makeStore, AppStore } from "../redux/store";
import { Provider } from "react-redux";

export default function StoreProvider({ children }: { children: ReactNode }) {
  const storeRef = useRef<AppStore>(makeStore());

  return <Provider store={storeRef.current}>{children}</Provider>;
}
