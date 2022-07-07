import { Component } from "react";

import "./index.css";

class Login extends Component {
  state = {
    email: "",
    password: "",
    errorMsg: "",
  };

  onChangePassword = (event) => {
    console.log(event.target.value);
    this.setState({ password: event.target.value });
  };

  onChangeEmail = (event) => {
    this.setState({ email: event.target.value });
  };

  onSubmitForm = (event) => {
    event.preventDefault();
    console.log(this.props);
    const { email, password } = this.state;
    const data = localStorage.getItem("userData");

    if (data === null) {
      this.state({ errorMsg: "Please Signup" });
    } else {
      const parsedData = JSON.parse(data);
      const userExists = parsedData.filter((eachItem) => {
        if (eachItem.emailId === email) {
          return eachItem;
        }
      });

      if (userExists[0].password === password) {
        console.log("success");
        const { history } = this.props;
        history.push("/");
      } else {
        this.setState({ errorMsg: "Invalid Credentials" });
      }
    }
  };

  render() {
    const { errorMsg } = this.state;
    return (
      <div className='main-container'>
        <div className='sub-container'>
          <h1>Login</h1>
          <form onSubmit={this.onSubmitForm} className='form-container'>
            <label htmlFor='emailId'>Email</label>
            <input
              className='input-class'
              type='text'
              placeholder='Email'
              id='emailId'
              onChange={this.onChangeEmail}
            />

            <label htmlFor='passwordId'>Password</label>
            <input
              type='password'
              placeholder='Passwords'
              id='passwordId'
              className='input-class'
              onChange={this.onChangePassword}
            />

            <div>
              <button
                className='submit-button'
                onClick={this.onSubmitForm}
                type='submit'
              >
                Login
              </button>
            </div>
          </form>
          <p>{errorMsg}</p>
        </div>
      </div>
    );
  }
}

export default Login;
