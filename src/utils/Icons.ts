import icFacebookW from '../../assets/icons/ic-facebook-white.png';
import icFacebookW2x from '../../assets/icons/ic-facebook-white@2x.png';
import icFacebookW3x from '../../assets/icons/ic-facebook-white@3x.png';
import icGoogleW from '../../assets/icons/ic-google-white.png';
import icGoogleW2x from '../../assets/icons/ic-google-white@2x.png';
import icGoogleW3x from '../../assets/icons/ic-google-white@3x.png';

const isRetina = (first: string, second?: string, third?: string): string => {
  if (window.devicePixelRatio >= 1 && third) {
    return third;
  }
  if (window.devicePixelRatio >= 0.5 && second) {
    return second;
  }
  return first;
};

export const IC_FACEBOOK_W = isRetina(
  icFacebookW,
  icFacebookW2x,
  icFacebookW3x,
);

export const IC_GOOGLE_W = isRetina(icGoogleW, icGoogleW2x, icGoogleW3x);
