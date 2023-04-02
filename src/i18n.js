// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslations from "./locales/en/translation.json";
import esTranslations from "./locales/es/translation.json";

const resources = {
  en: { translation: enTranslations },
  es: { translation: esTranslations },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // Cambia este valor para cambiar el idioma por defecto
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
