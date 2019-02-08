import { default as STRINGS } from '../../STRINGS';

class Localization {
  private _LANG: string = 'en';
  private _DEFAULT: string = 'en';

  public get LANG(): string  {
    return this._LANG;
  }

  public set LANG(value: string ) {
    this._LANG = value;
  }

  public getString = (param: string) => {
    let string: string = STRINGS[this._LANG] && STRINGS[this._LANG][param]
      ? STRINGS[this._LANG][param]
      : null;

    if (!string) {
      string = STRINGS[this._DEFAULT][param]
      ? STRINGS[this._DEFAULT][param]
      : null;
    }

    if (!string) {
      return '...';
    }
    return string.toString();
  }
}

export const getString = Localization.prototype.getString;
export default Localization;
