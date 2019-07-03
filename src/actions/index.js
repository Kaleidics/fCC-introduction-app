import { API_INTRO_URL } from "../config";

export const FETCH_INTROS_SUCCESS = "FETCH_INTROS_SUCCESS";
export const fetchIntrosSuccess = intros => ({
    type: FETCH_INTROS_SUCCESS,
    intros
});

export const fetchIntros = () => dispatch => {
    const url = API_INTRO_URL;

    return fetch(url)
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json();
        })
        .then(intros => {
            dispatch(fetchIntrosSuccess(intros));
        })
        .catch(err => console.log(err));
}