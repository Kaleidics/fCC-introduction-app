import { LOGIN_USER_SUCCESS, FETCH_INTROS_SUCCESS } from '../actions';

const initialState = {
    intros: [],
    authState: false
}

export const Reducer = (state = initialState, action) => {
    if (action.type === FETCH_INTROS_SUCCESS) {
        return Object.assign({}, state, {
            intros: action.intros
        });
    }

    if (action.type === LOGIN_USER_SUCCESS) {
        return Object.assign({}, state, {
            authState: action.success
        });
    }

    return state;
}