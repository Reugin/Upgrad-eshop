import React, { Component } from 'react';
import '../common/common.css';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { AccountCircle } from '@mui/icons-material';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';


class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showPassword: false,
        };
    }

    handleSignUp = async (e) => {
        e.preventDefault();
        const email = e.target.querySelector('.email').value;
        const phone = e.target.querySelector('.telephone').value;
        const password = e.target.querySelector('.password').value;

        try {
            const requestBody = { email, password, phone };
            const userData = await callBackendAPI('POST', '/login', requestBody);
            console.log('User logged in:', userData);
            // You can now handle the logged-in user data (e.g., store in state, redirect, etc.)
        } catch (error) {
            console.error('Error:', error.message);
            // Handle login error (e.g., show error message on the UI)
        }
    };

    togglePasswordVisibility = () => {
        this.setState((prevState) => ({
            showPassword: !prevState.showPassword,
        }));
    };

    render() {

        return (
            <ThemeProvider theme={theme}>
            <div className="modal-container">
                <div className="modal-background">
                    <h1 className="modal-header">Create Account</h1>
                    <div className='modal-box'>
                        <div className="input-box" >
                            <input type="email" className='input-text email' placeholder="Email Address" required />
                            <AccountCircle className='modal-icon' />
                        </div>
                        <div className="input-box" >
                            <input type="tel" className='input-text telephone' placeholder="Mobile Number" required />
                            <LocalPhoneIcon className='modal-icon' />
                        </div>
                        <div className="input-box" >
                            <input type="password" className='input-text password' placeholder="Password" required />
                            <VisibilityIcon className='modal-icon'></VisibilityIcon>
                        </div>
                     
                        <button className="continue-btn" type='submit'>Continue</button>
                        <div className='create-new-account-box'>
                            <p className="create-account">Already have an Account?</p>
                            <a href="signIn" className="sign-up-link">
                                Login
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            </ThemeProvider>
        );
    }
}

export default SignUp;
