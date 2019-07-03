import { FETCH_INTROS_SUCCESS } from '../actions';

const initialState = {
    intros: []
}

export const Reducer = (state = initialState, action) => {
    if (action.type === FETCH_INTROS_SUCCESS) {
        return Object.assign({}, state, {
            intros: action.intros
        });
    }

    return state;
}