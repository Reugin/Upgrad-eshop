import React, { Component } from 'react';
import './Loginpage.css';
import icon from './icons/icon-eye.png';
import loginLogo from './icons/upgradeLoginLogo.png'
import { TextField } from '@mui/material'

class Loginpage extends Component {
    render() {
        // showPass = function()=> {
        //     if (input.type == "password") {
        //         input.type = "text";
        //         eye.src = "./icons/icons8-hide-24.png";
        //     } else {
        //         input.type = "password";
        //         eye.src = "./icons/icons8-eye-24.png";
        //     }

        return (
            <div className="modal-container">
                <div className="modal-background">
                    <h1 className="login-header">Welcome in<br></br> upGrad Eshop</h1>
                    <div className='login-box'>

                        <input type="email" className='login-input-text email' placeholder="Email Address" required/>
                        <div className="input-box" >
                            <input type="password" className='login-input-text password' placeholder="Password" required/>
                            <img src={icon} id="eye-logo" width="20px" height="20px" className='eye-logo' />
                        </div>
                        <a href="#forgot_pass" className="forgot-password" >Forgot Password?</a>
                        <button className="continue-btn" type='submit'>Continue</button>
                        <div className='create-new-account-box'> 
                        <p className="create-account">Don't have an account?</p>
                        <a href="#sign_up" className='sign-up-link'>Sign up</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Loginpage;