import React from 'react';
import { Box, Typography } from '@mui/material';
import { Button } from '@mui/material';
import { Widgets } from '@mui/icons-material';
import './SignOutModal.css';

export default function SignOutModal(props) {
    const handleLoginLogout = () => {
            localStorage.removeItem('authToken');
            window.location.href = '/SignIn';
    };
    return (props.trigger)?(
        <Box className='pop-up-window'>
        <div className='popup-inner'>
            <h2 style={{color:'#000'}}>Are You Sure</h2>
  
            <button onClick={handleLoginLogout}>Yes</button>
            <button onClick={()=> props.setTrigger(false)}>Close</button>
   
            {props.children}
        </div>

    </Box>
    ):"";
}