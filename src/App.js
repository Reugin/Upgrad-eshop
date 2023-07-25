import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./component/pages/signIn/SignIn";
import SignUp from "./component/pages/signup/SignUp";
import MenuAppBar from './component/pages/menuBar/MenuAppBar';

function App() {
    return (

        <Router>
            <Routes>
                <Route path="/" element={<SignIn />} />
                <Route path="/signIn" element={<SignIn />} />
                <Route path="/signUp" element={<SignUp />} />
                <Route path="/landing" element={<MenuAppBar />} />
                {/* Add more routes here if needed */}
            </Routes>
        </Router>
    );
}

export default App;
