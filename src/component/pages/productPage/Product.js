import React, { useState, useEffect } from 'react';
import { Container, Grid, ToggleButton, ToggleButtonGroup, createTheme, ThemeProvider } from '@mui/material';
import { CallBackendAPI } from "../../library/app";
import ProductCard from "./ProductCard";

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

const ProductPage = () => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('All');

    useEffect(() => {
        fetchData()
    }, []);


    const fetchData = async () => {
        try {
            const categoriesData = await CallBackendAPI('GET', '/products/categories', null);
            setCategories(['All', ...categoriesData]);

            // Fetch all products from the backend
            const productsData = await CallBackendAPI('GET', '/products', null);
            setProducts(productsData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleCategoryChange = (event, newCategory) => {
        setSelectedCategory(newCategory);
    };

    return (
        <ThemeProvider theme={theme}>
            <div className="product-card-main-container-">
                <Container className='product-card-container'>
                    {/* Show category tabs only if categories are available */}
                    {categories.length > 0 && (
                        <ToggleButtonGroup
                            value={selectedCategory}
                            exclusive
                            onChange={handleCategoryChange}
                            aria-label="product categories"
                            style={{ marginBottom: 20 }}
                        >
                            {categories.map((category) => (
                                <ToggleButton key={category} value={category} aria-label={category}>
                                    {category}
                                </ToggleButton>
                            ))}
                        </ToggleButtonGroup>
                    )}
                    <Grid container spacing={4}>
                        {/* Loop through products and filter by selected category */}
                        {products
                            .filter((product) => selectedCategory === 'All' || product.category === selectedCategory)
                            .map((product) => (
                                <Grid item sm={3} key={product.id}>
                                    <ProductCard product={product} />
                                </Grid>
                            ))}
                    </Grid>
                </Container>
            </div>
        </ThemeProvider>
    );
}

export default ProductPage;
