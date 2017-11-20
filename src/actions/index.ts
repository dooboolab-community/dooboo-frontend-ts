/**
 * Created by hyochan on 2016. 12. 15..
 */

const LOGGED_IN = 'LOGGED_IN';

const isLoggedIn = (input) => {
  return {
    type: LOGGED_IN,
    value: input
  }
}

export {
  isLoggedIn,
};
