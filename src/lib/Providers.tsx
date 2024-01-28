// app/providers.tsx
"use client";
import { store } from "@/redux/store";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { Provider } from "react-redux";
import AOS from "aos";
import "aos/dist/aos.css";
export function Providers({ children }: { children: React.ReactNode }) {
  AOS.init();
  return (
    <Provider store={store}>
      <NextUIProvider>
        <NextThemesProvider attribute="class" defaultTheme="light">
          {children}
        </NextThemesProvider>
      </NextUIProvider>
    </Provider>
  );
}
