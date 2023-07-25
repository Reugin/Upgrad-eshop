import React,{Component} from 'react';
import '../common/common.css';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { AccountCircle } from '@mui/icons-material';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';


class SignUp extends Component {
    render() {

        return (
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
                            <a href="signIn" className='sign-up-link'>Login</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default SignUp;