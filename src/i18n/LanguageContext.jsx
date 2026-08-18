import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { translateValue } from "./translations";

const LanguageContext = createContext(null);

const getInitialLanguage = () => {
  const savedLanguage = window.localStorage.getItem("portfolio-language");
  return savedLanguage === "en" ? "en" : "tr";
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(getInitialLanguage);

  useEffect(() => {
    document.documentElement.lang = language;
    window.localStorage.setItem("portfolio-language", language);
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t: (text) => translateValue(text, language),
      localize: (data) => translateValue(data, language),
    }),
    [language],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
}
