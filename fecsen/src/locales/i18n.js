import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import EN from "./language/en.json";
import KO from "./language/ko.json";

const resources = {
    en: {
        translation: EN,
    },
    ko: {
        translation: KO,
    },
};

i18n.use(initReactI18next).init({
    resources,
    lng: "ko", // 기본 설정 언어
    fallbackLng: "en", // 번역 파일에서 찾을 수 없는 경우 기본 언어
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;
