import React, { useEffect, useState } from 'react';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { AppBar, Button, InputBase, Link, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import logo from '../../assets/icons/upgradeLogo.png';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import SignOutModal from './SignOutModal';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.25),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.30),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

function Navbar({ onSearch }) {
    const [searchQuery, setSearchQuery] = useState('');

    // Callback function to handle search input changes
    const handleSearchInputChange = (event) => {
        const value = event.target.value;
        setSearchQuery(value);
        onSearch(value); // Call the callback function with the search value
    };

    // State to track user login status
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // Check for auth token in localStorage on component mount
    useEffect(() => {
        const authToken = localStorage.getItem('authToken');
        setIsLoggedIn(!!authToken); // Set isLoggedIn to true if authToken is present
    }, []);

    const handleLoginLogout = () => {
        if (isLoggedIn) {
            setButtonPopup(true);
        } else {
            window.location.href = '/signIn'; // Redirect to the signIn page
        }
    };

    const handleSignUp = () => {
        window.location.href = '/signUp'; // Redirect to the sign-up page
    };

    const handleLogoClick = () => {
        window.location.href = '/products';
    };

    const handleSignOutModal = () => {

    }
        // For Sign out modal
        const [buttonPopup , setButtonPopup] = useState(false);

    return (
        <>

            <AppBar position='sticky' sx={{ backgroundColor: 'red' }}>

                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Link to="/products" style={{ cursor: 'pointer', color: "white", textDecoration: 'none', display: 'flex', alignItems: 'center', }} onClick={handleLogoClick}>
                        <ShoppingCartOutlinedIcon fontSize='large' sx={{}} />
                        <Typography variant='img' sx={{ padding: 1, display: 'flex', flexDirection: 'column', }}>

                            <img src={logo} alt='logo' width={105} />

                            <span style={{ fontSize: 'large', fontWeight: 600, }}>Eshop</span>
                        </Typography>
                    </Link>
                    {onSearch && (
                        <>
                            <Box
                                sx={{
                                    margin: '10px',
                                    padding: '3px 8px',
                                    fontFamily: 'Helvetica',
                                    width: '70%',
                                    display: 'flex',
                                    alignItems: 'center',
                                }}
                            >
                                <Search>
                                    <SearchIconWrapper>
                                        <SearchIcon />
                                    </SearchIconWrapper>
                                    <StyledInputBase
                                        placeholder='Search…'
                                        inputProps={{ 'aria-label': 'search' }}
                                        onChange={handleSearchInputChange}
                                        value={searchQuery}
                                    />
                                </Search>
                            </Box>
                        </>
                    )}

                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        {!isLoggedIn && (
                            <Button
                                onClick={handleSignUp} // Call handleSignUp function on "Sign Up" button click
                                sx={{
                                    margin: '10px',
                                    width: '100px',
                                    padding: '3px 8px',
                                    fontFamily: 'Helvetica',
                                    color: 'white',
                                    '&:hover': {
                                        border: '1px solid white',
                                    },
                                }}
                            >
                                Sign Up
                            </Button>
                        )}
                        <Button
                            onClick={handleLoginLogout} // Toggle login/logout based on isLoggedIn state
                            sx={{
                                margin: '10px',
                                width: '100px',
                                padding: '3px 8px',
                                fontFamily: 'Helvetica',
                                color: 'white',
                                '&:hover': {
                                    border: '1px solid white',
                                },
                            }}
                        >
                            {isLoggedIn ? 'Sign Out' : 'Sign In'}
                        </Button>

                    </Box>
                    <SignOutModal trigger={buttonPopup} setTrigger={setButtonPopup}>
                    </SignOutModal>
                </Box>

            </AppBar>

        </>
    );
}

export default Navbar;
