import React, { useState } from 'react';
import '../common/common.css';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { AccountCircle } from '@mui/icons-material';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { CallBackendAPI } from "../../library/app";
import { ThemeProvider } from "@mui/material/styles";
import {useNavigate} from "react-router-dom";

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [contactNumber, setPhone] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleSignUp = async (e) => {
        e.preventDefault();

        try {
            const requestBody = { firstName, lastName, email, contactNumber, password };
            const userData:any = await CallBackendAPI('POST', '/users', requestBody);
            if (userData?._id != null){
                navigate(`/signIn`);
            }
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
                <h1 className="modal-header">Create Account</h1>
                <form onSubmit={handleSignUp}>
                    <div className='modal-box'>
                        <div className="input-box" >
                            <input type="text" className='input-text email' value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="First Name" required />
                            <AccountCircle className='modal-icon' />
                        </div>
                        <div className="input-box" >
                            <input type="text" className='input-text email' value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Last Name" required />
                            <AccountCircle className='modal-icon' />
                        </div>
                        <div className="input-box" >
                            <input type="email" className='input-text email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" required />
                            <AccountCircle className='modal-icon' />
                        </div>
                        <div className="input-box" >
                            <input type="tel" className='input-text telephone' value={contactNumber} onChange={(e) => setPhone(e.target.value)} placeholder="Mobile Number" required />
                            <LocalPhoneIcon className='modal-icon' />
                        </div>
                        <div className="input-box" >
                            <input type={showPassword ? 'text' : 'password'} className='input-text password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
                            <VisibilityIcon className='modal-icon' onClick={togglePasswordVisibility} />
                        </div>

                        <button className="continue-btn" type='submit'>Continue</button>
                        <div className='create-new-account-box'>
                            <p className="create-account">Already have an Account?</p>
                            <a href="signIn" className="sign-up-link">
                                Login
                            </a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignUp;
