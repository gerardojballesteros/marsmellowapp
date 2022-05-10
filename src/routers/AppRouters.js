import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header'
import HomeScreen from '../components/home/Home';
import NotFound from '../components/notfound/NotFound';
import RoversScreen from '../components/rovers/RoversScreen';

export const AppRouters = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='*' element={<NotFound />} />
                <Route path="/" element={<HomeScreen />} />
                <Route path="/rovers" element={<RoversScreen/>} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default AppRouters

