"use client";
import React from "react";
import { ThemeProvider } from "next-themes";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { Provider } from "react-redux";
import { store } from "./(Slices)/Store";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <GoogleReCaptchaProvider
        reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string}
      >
        <ThemeProvider attribute="class">{children}</ThemeProvider>
      </GoogleReCaptchaProvider>
    </Provider>
  );
}
