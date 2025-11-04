// src/Components/LanguageToggle/LanguageToggle.jsx
import "./LanguageToggle.css";
import { useLanguage } from "../../context/LanguageContext";

export default function LanguageToggle() {
  const { lang, toggleLang } = useLanguage();

  return (
    <button
      type="button"
      className="lang-toggle"
      onClick={toggleLang}
      aria-label={lang === "pt" ? "Switch to English" : "Mudar para português"}
    >
      {lang === "pt" ? "EN" : "PT"}
    </button>
  );
}
