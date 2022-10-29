import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LayoutDefault } from '../config/layout/layoutDefault';
import { Home } from '../pages/Home';

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/home' element={<LayoutDefault showHeader children={<Home />}/> } />
                <Route path='/register' element={<LayoutDefault children={<h1>Lançamento</h1>} />} />

                <Route path='*' element={<LayoutDefault showHeader children={<h1>Home</h1>}/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export {  AppRoutes }