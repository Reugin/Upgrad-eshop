import React from 'react';
import MenuAppBar from '../menuBar/MenuAppBar';
import ProductCategory from "../productCategory/productCategory";
import ProductCard from "../productPage/ProductCard";
import Product from "../productPage/Product";
function Landing() {

    return (
        <>
            <MenuAppBar/>
            <ProductCategory/>
                <Product/>
        </>
    )

}

export default Landing
