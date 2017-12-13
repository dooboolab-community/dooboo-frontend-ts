import { default as STRINGS } from '@utils/STRINGS';

class Localization {
  private LANG: string = 'ko';

  public getLocale = () => {
    return this.LANG;
  }

  public setLocale = (param: string) => {
    this.LANG = param;
  }

  public getString = (param) => {
    const string: string = STRINGS[this.LANG] ? STRINGS[this.LANG][param.toString()] : null;

    if (!string) {
      return '...';
    }
    return string.toString();
  }
}

export const getString = Localization.prototype.getString;
export default Localization;
