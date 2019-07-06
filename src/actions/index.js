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

export const REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS";
export const registerUserSuccess = success => ({
    type: REGISTER_USER_SUCCESS,
    success
});

export const registerUser = credentials => dispatch => {
    const url = API + `/users/register`;

    return (
        fetch(url, {
            method: "POST",
            body: JSON.stringify(credentials),
            headers: {
                "Content-Type": "application/json"
            }
        })
            //if succussful User persist to DB, automatically login the new User
            .then(response => {
                if (response.status === 201) {
                    const loginCreds = {
                        username: credentials.username,
                        password: credentials.password
                    };
                    dispatch(loginUser(loginCreds));
                }
                // if no successful response return server response
                else {
                    return response
                        .json()
                        .then(response => {
                            alert(`${response.location.toUpperCase()} ${response.message.toUpperCase()}`);
                        })
                        .catch(err => console.log(err));
                }
                return response.json();
            })
            .catch(err => console.log(err))
    );
};