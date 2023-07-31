import React, { useState } from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { AccountCircle } from '@mui/icons-material';
import { useNavigate } from "react-router-dom";
import './SignIn.css';
import '../common/common.css';
import callBackendAPI from "../../library/app";

const SignIn = () => {
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        const email = e.target.querySelector('.email').value;
        const password = e.target.querySelector('.password').value;

        try {
            const requestBody = { email, password };
            const userData = await callBackendAPI('POST', '/auth', requestBody);

            if (userData.isAuthenticated) {
                navigate(`/products`);
            }
            console.log('User logged in:', userData);
        } catch (error) {
            console.error('Error:', error.message);
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    return (
        <div className="modal-container">
            <div className="modal-background">
                <h1 className="modal-header">Welcome in<br /> upGrad Eshop</h1>
                <div className="modal-box">
                    <form onSubmit={handleLogin}>
                        <div className="input-box">
                            <input
                                type="email"
                                className="input-text email"
                                placeholder="Email Address"
                                required
                            />
                            <AccountCircle className="modal-icon" />
                        </div>
                        <div className="input-box">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                className="input-text password"
                                placeholder="Password"
                                required
                            />
                            {showPassword ? (
                                <VisibilityOffIcon
                                    className="modal-icon"
                                    onClick={togglePasswordVisibility}
                                />
                            ) : (
                                <VisibilityIcon
                                    className="modal-icon"
                                    onClick={togglePasswordVisibility}
                                />
                            )}
                        </div>
                        <a href="#forgot_pass" className="forgot-password">Forgot Password?</a>
                        <button className="continue-btn" type="submit">Continue</button>
                    </form>
                    <div className="create-new-account-box">
                        <p className="create-account">Don't have an account?</p>
                        <a href="signUp" className="sign-up-link">Sign up</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
