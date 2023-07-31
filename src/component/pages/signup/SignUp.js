import React, { useState } from 'react';
import '../common/common.css';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { CallBackendAPI } from "../../library/app";
import { useNavigate } from "react-router-dom";
import { TextField } from '@mui/material';

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
            const userData: any = await CallBackendAPI('POST', '/users', requestBody);
            if (userData?._id != null) {
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
            <div className='modal-box'>
                <h2 className="modal-header">Create Account</h2>
                <form onSubmit={handleSignUp}>

                    <div className="input-box" >
                        <input type="text" className='input-text email' value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="First Name" required />
                        {/* <TextField id="standard-basic" label="First Name" variant="standard" value={firstName} onChange={(e) => setFirstName(e.target.value)} required/> */}
                    </div>
                    <div className="input-box" >
                        <input type="text" className='input-text email' value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Last Name" required />
                     
                    </div>
                    <div className="input-box" >
                        <input type="email" className='input-text email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" required />
                    
                    </div>
                    <div className="input-box" >
                        <input type="tel" className='input-text telephone' value={contactNumber} onChange={(e) => setPhone(e.target.value)} placeholder="Mobile Number" required />
                       
                    </div>
                    <div className="input-box" >
                        <input type={showPassword ? 'text' : 'password'} className='input-text password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
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

                    <button className="continue-btn" type='submit'>Continue</button>
                </form>
                <div className='create-new-account-box'>
                        <p className="create-account">Already have an Account?</p>
                        <a href="signIn" className="sign-up-link">Log in</a>
                    </div>
            </div>
        </div>
    );
}

export default SignUp;
