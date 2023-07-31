import React from 'react';
import { Card, CardContent, CardMedia, Typography, CardActions, CardActionArea, Button } from '@mui/material';
import '../productPage/ProductCard.css';
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
    const navigate = useNavigate();

    const handleAddToCart = () => {

        navigate(`/products/${product._id}`);
    };

    return (
        <Card className='product-card'>
            <CardContent>
                <CardActionArea>
                    <CardMedia
                        className="product-card-media"
                        component='img'
                        image={product.imageURL}
                        style={{}}
                    />
                </CardActionArea>
                <Typography variant="h6" style={{ paddingBlock: 10, fontWeight: 600, display: 'flex' }}>
                    Product Name:<br></br> {product.name}
                </Typography>
                <Typography>Available Items: {product.availableItems}</Typography>
                <CardActions sx={{ display: 'block' }}>
                    <Button fullWidth color='secondary' style={{ border: '1px solid #ff5722' }} onClick={handleAddToCart}>Buy Now</Button>
                </CardActions>
            </CardContent>
        </Card>
    );
};

export default ProductCard;
