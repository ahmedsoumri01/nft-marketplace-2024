"use client";

import { ReactNode, useMemo } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { makeStore, persistor } from "@/lib/reduxStore";

export default function StoreProvider({ children }: { children: ReactNode }) {
  // Create store instance only once
  const store = useMemo(() => makeStore(), []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
}
