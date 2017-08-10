/**
 * Created by hyochan on 2016. 12. 15..
 */
export const LOGGED_IN = 'LOGGED_IN';

export function isLoggedIn(input) {
    return {
        type: LOGGED_IN,
        value: input
    }
}