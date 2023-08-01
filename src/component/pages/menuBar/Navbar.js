import React from 'react';
import { AppBar, Button, InputBase, TextField, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import logo from '../../assets/icons/upgradeLogo.png'
import { Input, Margin } from '@mui/icons-material';
import '../menuBar/Navbar.css';
import { hover } from '@testing-library/user-event/dist/hover';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';



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
      // vertical padding + font size from searchIcon
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
function Navbar() {
    
    return (
        <>
            <AppBar position='static' sx={{ backgroundColor: 'red' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant='img' sx={{ padding: 1 }}>
                        <img src={logo} alt='logo' width={105}></img><br></br>
                        <span style={{ fontSize: 'large', fontWeight: 600 }}>Eshop</span>
                    </Typography>
                    <Box
                        sx={{
                            margin: '10px',
                            padding: '3px 8px',
                            fontFamily: 'Helvetica',
                            width: '70%',
                            display: 'flex',
                            alignItems: 'center'
                        }}>


                        <Search>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>


                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',

                        }}>
                        <Button
                        
                            sx={{
                                margin: '10px',
                                padding: '3px 8px',
                                fontFamily: 'Helvetica',
                                color: 'white',
                                '&:hover': {
                                    border: '1px solid white',
                                },
                            }}>
                            Home
                        </Button>
                        <Button
                       
                            sx={{
                                margin: '10px',
                                padding: '3px 8px',
                                fontFamily: 'Helvetica',
                                color: 'white',
                                '&:hover': {
                                    border: '1px solid white',
                                },
                            }}>
                            Log out
                        </Button>
                    </Box>

                </Box>
            </AppBar >
        </>
    );

}
export default Navbar;