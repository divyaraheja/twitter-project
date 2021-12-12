import React from 'react';

import {useHistory } from "react-router-dom";

const Signup = () => {
    let history = useHistory();
    function registerUser() {
        const username = document.getElementById('signup_username').value;
        const emailId = document.getElementById('signup_email').value;
        const password = document.getElementById('signup_password').value;
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            body: JSON.stringify({ 'emailId': emailId , 'username': username, 'password':password})
        };
        fetch('http://localhost:8000/api/registerUser', requestOptions)
            .then(response => response.json())
            .then(data => { console.log(data) });

        history.push("")
    }
    /*state = {
        credentials: { username: '', password: '' }
    }
    inputChanged = event => {
        const cred = this.state.credentials;
        cred[event.target.name] = event.target.value;
        this.setState({ credentials: cred });
    }
    login = event => {
        console.log("Login here");
        fetch()
    }*/
    return (
        <div class="container">
            <div class="box">
                <img src="/images/twitter svg.jpg" alt="" />
                <div class="form_detail">
                    <h1  class="head">SignUP
                        <img id="image_twitter" src="/images/twitter icon.jpg" alt=""  />
                    </h1>
                    <form>
                        <label>Name</label><br />
                        <input type="text" name="username" placeholder="Enter Name" id="signup_username"/*value={this.state.crdentials.username} onChange={ this.inputChanged} *//><br />
                        <label>Email</label><br />
                        <input type="email" name="" placeholder="Enter Email Address" id="signup_email" /><br />
                        <label>Password</label><br />
                        <input type="password" name="password" placeholder="Enter Password" id="signup_password"/*value={this.state.crdentials.password} onChange={this.inputChanged}*/ /><br />
                        <button onClick={()=>registerUser()} class="btn-sign-up" type="button">SignUp</button>
                    </form>
                    <h3>Join </h3>

                    <img src="/images/twitter icon.jpg" alt="" id="pic" />
                </div>
            </div>
        </div>

    );
}


export default Signup;