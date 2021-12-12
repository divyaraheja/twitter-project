import React from 'react';
import { NavLink, useHistory } from "react-router-dom";



function Login() {
    let history = useHistory();
    return (
        <div class="main">
            <div class="main-wrapper">
                <div class="left">
                    <div class="items-wrapper">
                        <div class="item">
                            <span class="icon icon--search"></span>
                            <span class="label">Follow your interests.</span>
                        </div>
                        <div class="item">
                            <span class="icon icon--people"></span>
                            <span class="label"
                            >Hear what your people are talking about.</span
                            >
                        </div>
                        <div class="item">
                            <span class="icon icon--reply"></span>
                            <span class="label">Join the conversation.</span>
                        </div>
                    </div>
                </div>
                <div class="right">
                    <div class="top">
                        <div class="input-group">
                            <input type="text" placeholder="Phone, email, or username" />
                        </div>
                        <div class="input-group">
                            <input type="text" placeholder="Password" />
                            <a class="forgot-password">Forgot password?</a>
                        </div>
                        <button onClick={() => { history.push("profile")}} class="btn-login" type="button">Log in</button>
                    </div>
                    <div class="middle">
                        <span class="icon icon--bird"></span>
                        <h1>See what's happening in<br />the world right now</h1>
                        <span>Join Twitter today.</span>
                        <a class="btn-sign-up" href="/signup">Sign up</a>
                        <a class="btn-login" href="/profile">Log in</a>
                    </div>
                </div>
            </div>
            <footer class="footer">
                <nav class="nav">
                    <ul>
                        <li>
                            <a>About</a>
                        </li>
                        <li>
                            <a>Help Center</a>
                        </li>
                        <li>
                            <a>Blog</a>
                        </li>
                        <li>
                            <a>Status</a>
                        </li>
                        <li>
                            <a>Jobs</a>
                        </li>
                        <li>
                            <a>Terms</a>
                        </li>
                        <li>
                            <a>Privacy Policy</a>
                        </li>
                        <li>
                            <a>Cookies</a>
                        </li>
                        <li>
                            <a>Ads Info</a>
                        </li>
                        <li>
                            <a>Brand</a>
                        </li>
                        <li>
                            <a>Apps</a>
                        </li>
                        <li>
                            <a>Advertise</a>
                        </li>
                        <li>
                            <a>Marketing</a>
                        </li>
                        <li>
                            <a>Business</a>
                        </li>
                        <li>
                            <a>Developers</a>
                        </li>
                        <li>
                            <a>Directory</a>
                        </li>
                        <li>
                            <a>Settings</a>
                        </li>
                        <li>
                            <a>� 2019 !Twitter</a>
                        </li>
                    </ul>
                </nav>
            </footer>
        </div>
    );
}

export default Login;