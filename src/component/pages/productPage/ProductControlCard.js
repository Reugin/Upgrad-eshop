import React from 'react';
import '../productPage/ProductControlCard.css'
// import '../../assets/icons/productImages/shoesImg.jpg'
import { Card, CardContent, CardMedia, Typography, Container, Grid, Button, CardActions, CardActionArea, createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
    palette:{
        primary:{
            main:"#fff"
        },
        secondary:{
            main:"#ff5722"
        },
    }
})
function ProductCard() {
    return (
        <ThemeProvider theme={theme}>
        <div className="main-container">
        <Container className='product-card-container'>
            <Grid container spacing={4}>
                <Grid item sm={3} >
                    <Card className='product-card'>
                        <CardContent>
                            <CardActionArea>
                            <CardMedia
                            className="product-card-media"
                                component='img'
                                image='https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D&w=1000&q=80/1920*1080'
                            /></CardActionArea>
                            <Typography varient="h5" style={{ paddingBlock: 10, fontWeight: 600, display: 'flex' }}>
                                Product Name: Nike Shoe
                            </Typography>
                            <Typography>Available Items:6</Typography>
                            <CardActions sx={{display:'block' }}>
                           
                                <Button color='secondary' 
                                style={{border:'1px solid #ff5722'}}>Add to Cart</Button>
                                
                            </CardActions>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item sm={3} >
                    <Card className='product-card'>
                        <CardContent>
                            <CardActionArea>
                            <CardMedia
                            className="product-card-media"
                                component='img'
                                image='https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2hvZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60/1920*1080'
                            /></CardActionArea>
                            <Typography varient="h5" style={{ paddingBlock: 10, fontWeight: 600, display: 'flex' }}>
                                Product Name: Nike Shoe
                            </Typography>
                            <Typography>Available Items:6</Typography>
                            <CardActions sx={{display:'block' }}>
                           
                                <Button color='secondary' 
                                style={{border:'1px solid #ff5722'}}>Add to Cart</Button>
                                
                            </CardActions>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item sm={3} >
                    <Card className='product-card'>
                        <CardContent>
                            <CardActionArea>
                            <CardMedia
                            className="product-card-media"
                                component='img'
                                image='https://images.unsplash.com/photo-1543508282-6319a3e2621f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNob2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60/1920*1080'
                            /></CardActionArea>
                            <Typography varient="h5" style={{ paddingBlock: 10, fontWeight: 600, display: 'flex' }}>
                                Product Name: Nike Shoe
                            </Typography>
                            <Typography>Available Items:6</Typography>
                            <CardActions sx={{display:'block' }}>
                           
                                <Button color='secondary' 
                                style={{border:'1px solid #ff5722'}}>Add to Cart</Button>
                                
                            </CardActions>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item sm={3} >
                    <Card className='product-card'>
                        <CardContent>
                            <CardActionArea>
                            <CardMedia
                            className="product-card-media"
                                component='img'
                                image='https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2hvZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60/1920*1080'
                            /></CardActionArea>
                            <Typography varient="h5" style={{ paddingBlock: 10, fontWeight: 600, display: 'flex' }}>
                                Product Name: Nike Shoe
                            </Typography>
                            <Typography>Available Items:6</Typography>
                            <CardActions sx={{display:'block' }}>
                           
                                <Button color='secondary' 
                                style={{border:'1px solid #ff5722'}}>Add to Cart</Button>
                                
                            </CardActions>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
        </div>
        </ThemeProvider>

    );
}

export default ProductCard;
