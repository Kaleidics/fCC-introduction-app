import React from "react";
import { connect } from "react-redux";
import { registerUser } from "../actions/index";

class Signup extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: "",
            firstname: "",
            lastname: ""
        }
    }

    handleRegister = e => {
        e.preventDefault();
        console.log("submitted")
        this.props.registerUser(this.state);
    }


    render() {
        return (
            <div className="popup">
                <form className="form" onSubmit={this.handleRegister}>
                    <fieldset className="form__fields">
                        <legend>Create Account</legend>
                        <label htmlFor="email">Email</label>
                        <input id="email" type="email" onChange={e => this.setState({ username: e.target.value })} required />
                        <label htmlFor="password" type="text">
                            Password
                        </label>
                        <input id="password" type="text" onChange={e => this.setState({ password: e.target.value })} required />
                        <label htmlFor="firstname">Firstname</label>
                        <input id="firstname" type="text" onChange={e => this.setState({ firstname: e.target.value })} />
                        <label htmlFor="lastname">Lastname</label>
                        <input id="lastname" type="text" onChange={e => this.setState({ lastname: e.target.value })} />
                    </fieldset>
                    <button className="button">Sign Up</button>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        registerUser: userInfo => {
            dispatch(registerUser(userInfo));
        }
    };
};

export default connect(
    null,
    mapDispatchToProps
)(Signup);
