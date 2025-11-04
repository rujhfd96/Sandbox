// src/context/LanguageContext.jsx
import { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

function getInitialLang() {
  if (typeof window === "undefined") return "pt";
  const saved = window.localStorage.getItem("lang");
  if (saved === "pt" || saved === "en") return saved;
  return "pt";
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(getInitialLang);

  const toggleLang = () => {
    setLang((prev) => {
      const next = prev === "pt" ? "en" : "pt";
      if (typeof window !== "undefined") {
        window.localStorage.setItem("lang", next);
      }
      return next;
    });
  };

  const value = { lang, toggleLang };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}


/* eslint-disable-next-line react-refresh/only-export-components */
export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage deve ser usado dentro de LanguageProvider");
  }
  return ctx;
}
