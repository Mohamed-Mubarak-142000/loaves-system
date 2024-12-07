import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// import common
import enCommon from "../../localization/en/common.json";
import arCommon from "../../localization/ar/common.json";

//import home
import enHome from "../../localization/en/home.json";
import arHome from "../../localization/ar/home.json";

//login
import enLogin from "../../localization/en/auth.json";
import arLogin from "../../localization/ar/auth.json";

//import add card
import enAddCard from "../../localization/en/add-card.json";
import arAddCard from "../../localization/ar/add-card.json";

export const defaultNS = "common";

export enum LANGUAGES {
  EN = "en",
  AR = "ar",
}

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    debug: process.env.NODE_ENV !== "production",
    fallbackLng: LANGUAGES.EN,
    defaultNS,
    resources: {
      [LANGUAGES.EN]: {
        common: enCommon,
        home: enHome,
        auth: enLogin,
        "add-card": enAddCard,
      },
      [LANGUAGES.AR]: {
        common: arCommon,
        home: arHome,
        auth: arLogin,
        "add-card": arAddCard,
      },
    },
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export const t = i18next.t.bind(i18next);

export const isArabic = i18next.language === LANGUAGES.AR;

export default i18next;
