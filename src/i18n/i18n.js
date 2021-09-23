import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import detector from "i18next-browser-languagedetector";

import locale_en from "./locales/en.json";
// import locale_ru from "./locales/ru.json";
import locale_uz from "./locales/uz.json";
import storage from "../utils/storage";
import { DEFAULT_LANG } from "../config/constants";

// the translations
const resources = {
  en: {
    translation: locale_en,
  },
  // ru: {
  //   translation: locale_ru
  // },
  uz: {
    translation: locale_uz,
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(detector) // detects defaultLang from source
  .init({
    resources,
    lng: storage.get("lang") ? storage.get("lang") : DEFAULT_LANG,
    fallbackLng: storage.get("lang") ? storage.get("lang") : DEFAULT_LANG,
    react: {
      useSuspense: false,
    },
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
