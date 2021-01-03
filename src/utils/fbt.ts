import {init} from 'fbt';
import intl from '../../assets/translatedFbts.json';

const DEFAULT_LOCALE = 'en';

export const viewerContext = {
  locale: DEFAULT_LOCALE,
};

export const initFbt = (): void => {
  if (navigator) viewerContext.locale = navigator.language.substr(0, 2);

  init({
    translations: intl,
    hooks: {
      getViewerContext: (): {locale: string} => viewerContext,
    },
  });
};

export const LOCALES = Object.freeze({
  ko: Object.freeze({
    bcp47: 'ko',
    rtl: false,
  }),
  en: Object.freeze({
    bcp47: 'en',
    rtl: false,
  }),
});

export enum Locale {
  KO = 'ko',
  EN = 'en',
}

export const changeLocale = (locale: Locale): void => {
  viewerContext.locale = locale;

  const html = document.getElementsByTagName('html')[0];

  if (html != null) html.lang = LOCALES[locale].bcp47;

  document.body.className = LOCALES[locale].rtl ? 'rtl' : 'ltr';
};
