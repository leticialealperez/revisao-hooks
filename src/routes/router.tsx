import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/home' element={<h1>Home</h1>} />
                <Route path='/register' element={<h1>Lançamento</h1>} />

                <Route path='*' element={<h1>Home</h1>}/>
            </Routes>
        </BrowserRouter>
    )
}

export {  AppRoutes }