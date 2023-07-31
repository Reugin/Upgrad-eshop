import React from 'react';
import { Card, CardContent, CardMedia, Typography, CardActions, CardActionArea, Button } from '@mui/material';

const ProductCard = ({ product }) => {
    return (
        <Card className='product-card'>
            <CardContent>
                <CardActionArea>
                    <CardMedia
                        className="product-card-media"
                        component='img'
                        image={product.imageURL}
                    />
                </CardActionArea>
                <Typography variant="h5" style={{ paddingBlock: 10, fontWeight: 600, display: 'flex' }}>
                    Product Name: {product.name}
                </Typography>
                <Typography>Available Items: {product.availableItems}</Typography>
                <CardActions sx={{ display: 'block' }}>
                    <Button color='secondary' style={{ border: '1px solid #ff5722' }}>Add to Cart</Button>
                </CardActions>
            </CardContent>
        </Card>
    );
};

export default ProductCard;
