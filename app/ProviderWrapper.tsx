"use client";
import store from "@/redux/store";
import { ThemeProvider } from "next-themes";
import React from "react";
import { Provider } from "react-redux";

const ProviderWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <ThemeProvider
        defaultTheme="light"
        enableSystem={false}
        attribute={"class"}
      >
        {children}
      </ThemeProvider>
    </Provider>
  );
};

export default ProviderWrapper;
