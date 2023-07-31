import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, TextField, Button, Card, CardContent, CardMedia, Grid, createTheme, ThemeProvider } from '@mui/material';
import { CallBackendAPI } from '../../library/app';
import './ProductDetails.css'; // Import the CSS file
import { useNavigate } from 'react-router-dom';

const theme = createTheme({
    palette: {
        primary: {
            main: "#fff"
        },
        secondary: {
            main: "#ff5722"
        },
    }
});

const ProductDetails = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        fetchProductDetails();
    }, []);

    const fetchProductDetails = async () => {
        try {
            const productDetails = await CallBackendAPI('GET', `/products/${productId}`, null);
            setProduct(productDetails);
        } catch (error) {
            console.error('Error fetching product details:', error);
        }
    };

    const handleQuantityChange = (event) => {
        setQuantity(event.target.value);
    };

    const navigate = useNavigate();

    const handleBuyClick = () => {
        navigate('/create-order', { state: { product, quantity } });

    };

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <ThemeProvider theme={theme}>
            <Container maxWidth="md" className="main-container">
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <Card>
                            <CardMedia
                                component="img"
                                height="400"
                                image={product.imageURL}
                                alt={product.name}
                                className="product-image"
                            />
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} className="product-details-container">
                        <Typography variant="h4" gutterBottom className="product-name">
                            {product.name}
                        </Typography>
                        <Typography variant="h6" gutterBottom className="product-category">
                            Category: {product.category}
                        </Typography>
                        <Typography variant="h6" gutterBottom className="product-price">
                            Price: ${product.price}
                        </Typography>
                        <Typography variant="body1" gutterBottom className="product-description">
                            Description: {product.description}
                        </Typography>
                        <Typography variant="body2" gutterBottom className="product-manufacturer">
                            Manufacturer: {product.manufacturer}
                        </Typography>
                        <Typography variant="body2" gutterBottom className="product-available-items">
                            Available Items: {product.availableItems}
                        </Typography>
                        <TextField
                            label="Quantity"
                            type="number"
                            value={quantity}
                            onChange={handleQuantityChange}
                            InputProps={{
                                inputProps: { min: 1, max: product.availableItems },
                            }}
                            variant="outlined"
                            margin="normal"
                            className="quantity-input"
                        />
                        <Button variant="contained" color="secondary" onClick={handleBuyClick} className="buy-button">
                            Place Order
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </ThemeProvider>
    );
};

export default ProductDetails;
