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

  public getString = (param) => {
    const string: string = STRINGS[this._LANG]
      ? STRINGS[this._LANG][param.toString()]
      : STRINGS[this._DEFAULT][param.toString()]
        ? STRINGS[this._DEFAULT][param.toString()]
        : null;

    if (!string) {
      return '...';
    }
    return string.toString();
  }
}

export const getString = Localization.prototype.getString;
export default Localization;
