import React, { useState, useEffect } from 'react';
import { Container, Grid, ToggleButton, ToggleButtonGroup, createTheme, ThemeProvider } from '@mui/material';
import { CallBackendAPI } from "../../library/app";
import ProductCard from "./ProductCard";
import Navbar from "../menuBar/Navbar";
import ProductCategory from "../productCategory/productCategory";

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
    const [searchedValue, setSearchValue] = useState('');
    const [sortKey, setSortKey] = useState('');
    const [sortDir, setSortDir] = useState('');

    useEffect(() => {
        fetchCategories()
    }, []);

    useEffect(() => {
        fetchProducts()
    }, [searchedValue, sortDir, sortKey]);

    const fetchCategories = async () => {
        try {
            const categoriesData = await CallBackendAPI('GET', '/products/categories', null);
            setCategories(['All', ...categoriesData]);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleCategoryChange = (event, newCategory) => {
        setSelectedCategory(newCategory);
    };
    
    const fetchProducts = async () =>{
        try {
            let queryParams = '';

            // Check if sortDir, sortKey, or searchedValue are not empty and add them to the query
            if (sortDir || sortKey || searchedValue) {
                const params = new URLSearchParams();
                if (sortDir) params.append('direction', sortDir);
                if (sortKey) params.append('sortBy', sortKey);
                if (searchedValue) params.append('name', searchedValue);

                queryParams = `?${params.toString()}`;
            }

            const productsData = await CallBackendAPI('GET', `/products?${queryParams}`, null);
            setProducts(productsData);
        }catch (e) {
            console.error('Error fetching data:', e);
        }
    }

    const handleSearch = (searchValue) => {
    setSearchValue(searchValue)
    };

    const handleSort = (sortKey, dir ) => {
        setSortDir(dir)
        setSortKey(sortKey)
    };

    return (
        <>
            <Navbar onSearch={handleSearch} />
            <ProductCategory callback={handleSort}/>
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

        </>

    );
}

export default ProductPage;
