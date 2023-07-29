import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./component/pages/signIn/SignIn";
import SignUp from "./component/pages/signup/SignUp";
import MenuAppBar from './component/pages/menuBar/MenuAppBar';
import ProductControlCard from './component/pages/productPage/ProductCard';
import ProductCategory from './component/pages/productCategory/ProductCategory';
import ProductCard from './component/pages/productPage/ProductCard';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<SignIn />} />
                <Route path="/signIn" element={<SignIn />} />
                <Route path="/signUp" element={<SignUp />} />
                <Route path="/landing" element={<MenuAppBar />} />
                <Route path="/landing" element={<ProductCategory/>}/>
                <Route path="/landing" element={<ProductControlCard/>}/>
                {/* Add more routes here if needed */}
            </Routes>
        </Router>

    );
}

export default App;
