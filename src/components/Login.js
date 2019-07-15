import React from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../actions/index';

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: ""
        }
    }

    handleLogin = e => {
        e.preventDefault();
        console.log("submitted login info");
        this.props.loginUser(this.state);
    }

    render() {
        return (
            <form onSubmit={this.handleLogin}>
                <fieldset>
                    <legend>Login</legend>
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" onChange={e => this.setState({ username: e.target.value })} required />
                    <label htmlFor="password" type="text">
                        Password
                    </label>
                    <input id="password" type="text" onChange={e => this.setState({ password: e.target.value })} required />
                </fieldset>
                <button className="button">Login</button>
            </form>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loginUser: userInfo => {
            dispatch(loginUser(userInfo));
        }
    };
};

export default connect(
    null,
    mapDispatchToProps
)(Login);