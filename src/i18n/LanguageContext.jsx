import { createContext, useContext, useState, useEffect } from "react";
import { translations } from "./translations";

const LanguageContext = createContext(null);

// 🔹 список поддерживаемых языков
const SUPPORTED_LANGUAGES = ["ru", "en"];

function getInitialLanguage() {
  // 1️⃣ Проверяем сохранённый язык
  const saved = localStorage.getItem("language");
  if (saved && SUPPORTED_LANGUAGES.includes(saved)) {
    return saved;
  }

  // 2️⃣ Определяем язык браузера
  const browserLang = navigator.language?.toLowerCase() || "";

  // "ru-RU" → "ru"
  const shortLang = browserLang.split("-")[0];

  if (SUPPORTED_LANGUAGES.includes(shortLang)) {
    return shortLang;
  }

  // 3️⃣ fallback
  return "ru";
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(getInitialLanguage);

  // сохраняем при изменении
  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const t = (id) => {
    const token = translations.find((item) => item.id === id);
    if (!token) return id;

    return token[language] || token.ru || id;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }

  return context;
}