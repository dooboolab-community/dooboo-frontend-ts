
const initialState = {
    value: false
};

export default function isLoggedIn(state = initialState, action){
    switch (action.type) {
        case 'LOGGED_IN':
            console.log("action LOGGED_IN : " + JSON.stringify(action));
            return Object.assign({}, state, {
                value: action.value
            });
        default:
            return state;
    }
};