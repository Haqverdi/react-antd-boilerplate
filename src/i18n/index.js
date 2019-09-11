/**
 * i18n (multilang) library config
 */
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { en, az, ru } from './locales';

const resources = {
  az,
  en,
  ru,
};

const detectionOptions = {
  // order and from where user language should be detected
  order: ['cookie', 'path', 'localStorage'],

  // keys or params to lookup language from
  lookupCookie: 'i18next',
  lookupLocalStorage: 'i18nextLnguage',
  lookupFromPathIndex: 0,

  // cache user language on
  caches: ['cookie', 'localStorage'],

  // optional expire and domain for set cookie
  cookieMinutes: 10000,
  cookieDomain: '.prospectsmb.com',
};

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    // lng: 'en',
    fallbackLng: 'az',
    load: 'languageOnly',
    whitelist: ['az', 'ru', 'en'],
    keySeparator: false,
    detection: detectionOptions,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18next;
