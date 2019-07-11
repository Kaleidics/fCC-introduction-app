import React from "react";
import { connect } from "react-redux";
import { registerUser } from "../actions/index";

class Signup extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
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
        return(
           <form onSubmit={this.handleRegister}>
               <fieldset>
                   <legend>Sign Up</legend>
                   <label htmlFor="email">Email</label>
                   <input id="email" type="email" onChange={e => this.setState({ email: e.target.value })} required></input>
                   <label htmlFor="password" type="text">Password</label>
                   <input id="password" type="text" onChange={e => this.setState({ password: e.target.value })} required></input>
                   <label htmlFor="firstname">Firstname</label>
                   <input id="firstname" type="text" onChange={e => this.setState({ firstname: e.target.value })}></input>
                   <label htmlFor="lastname">Lastname</label>
                   <input id="lastname" type="text" onChange={e => this.setState({ lastname: e.target.value })}></input>
               </fieldset>
               <button className="button">Sign Up</button>
           </form>
        )
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
