import React from 'react';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { red } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';

function ProductCategory({ callback }) {
    const theme = createTheme({
        palette: {
            primary: {
                main: '#ef5350',
                light: '#ef9a9a',
                dark: '#e53935',
                contrastText: '#fff',
            },
            secondary: {
                main: '#f44336',
            },
        },
    });

    const [alignment, setAlignment] = React.useState('Default');

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
        let dir = event.target.value
        if (dir == 'high'){
            callback('price', 1)
        }else if(dir == 'low'){
            callback('price', -1)
        }else if(dir == 'new'){
            callback('createdAt', -1)
        }else{
            callback('_id', -1)
        }

    };

    return (
        <ThemeProvider theme={theme}>
            
            <ToggleButtonGroup
                color="primary"
                value={alignment}
                exclusive
                onChange={handleChange}
                aria-label="Platform"
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    padding: 10,
                    backgroundColor: '#e6e6e6',
                    borderBottom: "1px solid #b0b0b0"
                }}
            >
                <ToggleButton value="default">Default</ToggleButton>
                <ToggleButton value="low">Price High to Low</ToggleButton>
                <ToggleButton value="high">Price Low to High</ToggleButton>
                <ToggleButton value="new">Newest</ToggleButton>
            </ToggleButtonGroup>
        </ThemeProvider>
    );
}

export default ProductCategory;
