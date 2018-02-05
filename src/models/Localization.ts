import { default as STRINGS } from '@utils/STRINGS';

class Localization {
  private LANG: string = 'en';
  private DEFAULT_LANG: string = 'en';

  public get $LANG(): string  {
    return this.LANG;
  }

  public set $LANG(value: string ) {
    this.LANG = value;
  }

  public getString = (param) => {
    const string: string = STRINGS[this.LANG]
      ? STRINGS[this.LANG][param.toString()]
      : STRINGS[this.DEFAULT_LANG][param.toString()]
        ? STRINGS[this.DEFAULT_LANG][param.toString()]
        : null;

    if (!string) {
      return '...';
    }
    return string.toString();
  }
}

export const getString = Localization.prototype.getString;
export default Localization;
