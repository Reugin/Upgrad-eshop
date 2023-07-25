import React, { Component } from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { AccountCircle } from '@mui/icons-material';

import './SignIn.css'
import '../common/common.css'

class SignIn extends Component {
    render() {

        return (
            <div className="modal-container">
                <div className="modal-background">
                    <h1 className="modal-header">Welcome in<br></br> upGrad Eshop</h1>
                    <div className='modal-box'>
                        <div className="input-box" >
                            <input type="email" className='input-text email' placeholder="Email Address" required />
                            <AccountCircle className='modal-icon' />
                        </div>
                        <div className="input-box" >
                            <input type="password" className='input-text password' placeholder="Password" required />
                            <VisibilityIcon className='modal-icon'></VisibilityIcon>
                        </div>
                        <a href="#forgot_pass" className="forgot-password" >Forgot Password?</a>
                        <button className="continue-btn" type='submit'>Continue</button>
                        <div className='create-new-account-box'>
                            <p className="create-account">Don't have an account?</p>
                            <a href="signUp" className='sign-up-link'>Sign up</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default SignIn;