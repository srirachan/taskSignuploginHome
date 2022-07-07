import { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import "./index.css";

class SignUp extends Component {
  state = {
    name: "",
    password: "",
    emailId: "",
    phoneNo: "",
  };
  onChangeName = (event) => {
    event.preventDefault();
    this.setState({ name: event.target.value });
  };
  onChangePassword = (event) => {
    event.preventDefault();
    this.setState({ password: event.target.value });
  };

  onChangeEmail = (event) => {
    event.preventDefault();
    this.setState({ emailId: event.target.value });
  };

  onChangePhone = (event) => {
    event.preventDefault();
    this.setState({ phoneNo: event.target.value });
  };

  onSubmitForm = (event) => {
    event.preventDefault();

    const { name, password, emailId, phoneNo } = this.state;

    const newUser = {
      id: uuidv4(),
      name,
      password,
      emailId,
      phoneNo,
    };

    console.log(newUser.id);

    let data = localStorage.getItem("userData");
    console.log(data);
    if (data === null) {
      data = [];
    } else {
      data = JSON.parse(data);
    }

    data.push(newUser);

    const stringifiedData = JSON.stringify(data);

    localStorage.setItem("userData", stringifiedData);
  };

  render() {
    return (
      <div className='main-container'>
        <div className='sub-container'>
          <h1>SignUp</h1>
          <form onSubmit={this.onSubmitForm} className='form-container'>
            <label htmlFor='nameId'>Name</label>
            <input
              className='input-class'
              type='text'
              placeholder='Please Enter Name'
              id='nameId'
              onChange={this.onChangeName}
            />

            <label htmlFor='passwordId'>Password</label>
            <input
              type='password'
              placeholder='Please Enter Password'
              id='passwordId'
              className='input-class'
              onChange={this.onChangePassword}
            />

            <label htmlFor='emailId'>Email</label>
            <input
              className='input-class'
              type='text'
              placeholder='Please Enter Name'
              id='emailId'
              onChange={this.onChangeEmail}
            />

            <label htmlFor='phoneId'>Phone no</label>
            <input
              className='input-class'
              type='text'
              placeholder='Please Phone no'
              id='phoneId'
              onChange={this.onChangePhone}
            />
            <div>
              <button
                className='submit-button'
                onClick={this.onSubmitForm}
                type='submit'
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SignUp;
