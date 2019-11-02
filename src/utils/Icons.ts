const isRetina = (first: any, second?: any, third?: any) => {
  if (window.devicePixelRatio >= 2 && third) {
    return third;
  }
  if (window.devicePixelRatio >= 1.5 && second) {
    return second;
  }
  return first;
};

export const IC_FACEBOOK_W = isRetina(
  require('../../assets/icons/ic-facebook-white.png'),
  require('../../assets/icons/ic-facebook-white@2x.png'),
  require('../../assets/icons/ic-facebook-white@3x.png'),
);

export const IC_GOOGLE_W = isRetina(
  require('../../assets/icons/ic-google-white.png'),
  require('../../assets/icons/ic-google-white@2x.png'),
  require('../../assets/icons/ic-google-white@3x.png'),
);
