import React, { Component } from "react";

class SignOut extends Component {
  render() {
    return <button onClick={this.props.changeToLoggedOut}>Logout</button>;
  }
}

export default SignOut;
