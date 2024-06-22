import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 

import Doctor from './Doctor';
import SuccessPage from './SuccessPage'; 
import SuccessPageLogin from './SuccessPageLogin'; 

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Doctor />} /> 
                <Route path="/success" element={<SuccessPage />} /> 
                <Route path="/successlogin" element={<SuccessPageLogin />} /> 
            </Routes>
        </Router>
    );
}

export default App;
