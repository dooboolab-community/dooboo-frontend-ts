import en from './assets/langs/en.json';
import i18n from 'i18n-js';
import ko from './assets/langs/ko.json';

const DEFAULT_LANG = 'en';
i18n.locale = DEFAULT_LANG;

if (navigator) {
  i18n.locale = navigator.language.substr(0, 2);
}

i18n.fallbacks = true;
i18n.translations = { en, ko };

export const getString = (param: string, mapObj?: Record<string, any>): string => {
  if (mapObj) {
    i18n.t(param, mapObj);
  }
  return i18n.t(param);
};
