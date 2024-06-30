"use client";

import { ChakraProvider as Chakra } from "@chakra-ui/react";
import theme from "./styles/theme";
import React, {
  createContext,
  use,
  useContext,
  useEffect,
  useState,
} from "react";
import englishLocale from "./locale/en.json";
import russianLocale from "./locale/ru.json";

import { Lang } from "./types";

export const ChakraProvider = ({ children }: { children: React.ReactNode }) => {
  return <Chakra theme={theme}>{children}</Chakra>;
};

export interface ILocaleContext {
  locale: typeof englishLocale | typeof russianLocale;
  setLanguage: (language: Lang) => void;
  lang: Lang;
}

const defaultContext = {
  locale: englishLocale,
  setLanguage: () => {},
  lang: Lang.EN,
};

const LocaleContext = createContext<ILocaleContext>(defaultContext);

export const LocaleProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const initialLang =
    (typeof window !== "undefined" && (localStorage.getItem("lang") as Lang)) ||
    Lang.EN;

  const [lang, setLang] = useState(initialLang);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("lang", lang);
    }
  }, [lang]);

  const setLanguage = (language: Lang) => {
    setLang(language);
  };

  const locale = lang === "ru" ? russianLocale : englishLocale;

  return (
    <LocaleContext.Provider value={{ locale, setLanguage, lang }}>
      {children}
    </LocaleContext.Provider>
  );
};

export const useLocale = () => useContext(LocaleContext);
