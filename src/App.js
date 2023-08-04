import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./component/pages/signIn/SignIn";
import SignUp from "./component/pages/signup/SignUp";
import Landing from "./component/pages/landing/Landing";
import ProductDetails from "./component/pages/productPage/ProductDetails";
import CreateOrder from "./component/pages/productPage/CreateOrder";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/signIn" element={<SignIn />} />
                <Route path="/signUp" element={<SignUp />} />
                <Route path="/products" element={<Landing />} />
                <Route path="/products/:productId" element={<ProductDetails />} />
                <Route path="/create-order" element={<CreateOrder />} />
                {/* Add more routes here if needed */}
            </Routes>
        </Router>
    );
}

export default App;
