import { API_BASE_URL, API_INTRO_URL } from "../config";

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
};

export const REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS";
export const registerUserSuccess = success => ({
    type: REGISTER_USER_SUCCESS,
    success
});

export const registerUser = credentials => dispatch => {
    const url = API_BASE_URL + `/users/register`;
    console.log(url);
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
                            //Using alert for now, needs a universal UI notifier for error message
                            alert(`${response.message.toUpperCase()}`);
                        })
                        .catch(err => console.log(err));
                }
                return response.json();
            })
            .catch(err => console.log(err))
    );
};

export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const loginUserSuccess = success => ({
    type: LOGIN_USER_SUCCESS,
    success
});

export const loginUser = credientials => dispatch => {
    const url = API_BASE_URL + `/auth/login`;

    return fetch(url, {
        method: "POST",
        body: JSON.stringify(credientials),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(res => res.json())
    .then(response => {
        const authToken = response.authtoken;
        const userId = response.userid;
        localStorage.setItem("localtoken", authToken);
        localStorage.setItem("authedUser", userId);
    })
    .then(response => {
        if (localStorage.getItem("localtoken")) {
            dispatch(loginUserSuccess(true));
            //Need to set a UI update here to show login was success
        }
    })
    .catch(err => {
        //Using alert for now, but needs a universal Error component, which we will pass the error message to
        alert("USERNAME OR PASSWORD DO NOT MATCH");
    })
};
