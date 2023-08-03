import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Stepper, Step, StepLabel, Button, Typography, createTheme, ThemeProvider, Container, Grid, TextField } from '@mui/material';
import { CallBackendAPI } from '../../library/app';

// import './CreateOrder.css'; // Import the CSS file for styling

const theme = createTheme({
    palette: {
        primary: {
            main: "#000"
        },
        secondary: {
            main: "#ff5722"
        },
    }
});

const CreateOrder = () => {
    const location = useLocation();
    const { product, quantity, addressList } = location.state;
    const [activeStep, setActiveStep] = useState(0);

    const handleNextStep = () => {
        setActiveStep((prevStep) => prevStep + 1);
    };

    const handlePreviousStep = () => {
        setActiveStep((prevStep) => prevStep - 1);
    };

    const handleConfirmOrder = async () => {
        try {
            // Assuming you have the necessary details for the order, address, and user.
            const orderDetails = {
                product,
                quantity,
                addressList,
                // Include any other necessary order details here
            };

            // Send the order details to the backend to create the order
            const orderResponse = await CallBackendAPI('POST', '/orders', orderDetails);

            // Show the confirmation message and redirect to the Orders page
            if (orderResponse.success) {
                // Display the confirmation message
                alert('Your order is confirmed.');

            } else {
                // Handle error if the order could not be created
                alert('Failed to create the order. Please try again.');
            }
        } catch (error) {
            console.error('Error confirming the order:', error);
            alert('Failed to create the order. Please try again.');
        }
    };

                //Get address from backend



    const steps = ['Address', 'Confirm Order'];

    return (
        <ThemeProvider theme={theme}>
            <Container maxWidth="md" className="main-container">
                <Stepper color="secondary" activeStep={activeStep}>
                    {steps.map((label) => (
                        <Step color="secondary" key={label}>
                            <StepLabel color="secondary">{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                <div>
                    {activeStep === 0 && (
                        <Container>
                            <Grid container spacing={2} rowSpacing={2} >
                                <Grid item xs={12}>
                                    <Typography variant="h5" gutterBottom className="order-summary-heading">
                                        Order Summary
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant="subtitle1" gutterBottom>
                                        Product: {product.name}
                                    </Typography>
                                    <Typography variant="subtitle1" gutterBottom>
                                        Quantity: {quantity}
                                    </Typography>
                                    {/* Include other product and order details here */}
                                </Grid>
                                <Grid item xs={12} >
                                    <Typography variant="h5" gutterBottom className="address-heading">
                                        Shipping Address
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label='Flat, House no., Building, Company, Apartment'
                                        type='text'
                                        size='small'>
                                    </TextField>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label='Area, Street, Sector, Village'
                                        type='text'
                                        size='small'>
                                    </TextField>
                                </Grid>
                                <Grid item sx={12} sm={6}>
                                    <TextField
                                        fullWidth
                                        label='Landmark'
                                        type='text'
                                        size='small'>
                                    </TextField>
                                </Grid>

                                <Grid item sx={12} sm={6}>
                                    <TextField
                                        fullWidth
                                        label='Pincode'
                                        type='text'
                                        size='small'>
                                    </TextField>
                                </Grid>

                                <Grid item xs={12} sx={{display:'flex' ,justifyContent:'space-between', marginBlock:'10px',}}>
                                <Button 
                                    onClick={handlePreviousStep} 
                                    className="previous-step-button"
                                    sx={{
                                        border:'1px solid black'
                                    }}>
                                        Back
                                    </Button>
                                    
                                    <Button
                                        color="secondary"
                                        onClick={handleConfirmOrder}
                                        className="confirm-order-button"
                                        sx={{
                                            border: '1px solid #ff5722',
                                        }}>
                                        Confirm Order
                                    </Button>
                                    
                                </Grid>
                            </Grid>
                        </Container>
                    )}
                </div>
            </Container>
        </ThemeProvider>
    );
};

export default CreateOrder;
