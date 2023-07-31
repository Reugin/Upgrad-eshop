import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./component/pages/signIn/SignIn";
import SignUp from "./component/pages/signup/SignUp";
import MenuAppBar from './component/pages/menuBar/MenuAppBar';
import ProductControlCard from './component/pages/productPage/ProductCard';
import ProductCategory from "./component/pages/productCategory/productCategory";
import Landing from "./component/pages/landing/Landing";
import ProductDetails from "./component/pages/productPage/ProductDetails";
import CreateOrder from "./component/pages/productPage/CreateOrder";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<SignIn />} />
                <Route path="/signIn" element={<SignIn />} />
                <Route path="/signUp" element={<SignUp />} />
                <Route path="/products" element={<Landing/>}/>
                <Route path="/products/:productId" element={<ProductDetails/>}/>
                <Route path="/create-order" element={<CreateOrder/>}/>
                {/* Add more routes here if needed */}
            </Routes>
        </Router>
    );
}

export default App;
