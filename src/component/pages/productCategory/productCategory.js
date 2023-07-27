import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { red } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import React from 'react';



function ProductCategory() {


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


    const [alignment, setAlignment] = React.useState('web');

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
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
                    backgroundColor:'#e6e6e6' ,
                    borderBottom:"1px solid #b0b0b0"
                }}
            >
                <ToggleButton value="Default">Default</ToggleButton>
                <ToggleButton value="Price High to Low">Price High to Low</ToggleButton>
                <ToggleButton value="Price Low to High">Price Low to High</ToggleButton>
                <ToggleButton value="Newest">Newest</ToggleButton>
            </ToggleButtonGroup>
        </ThemeProvider>

    );

}
export default ProductCategory;