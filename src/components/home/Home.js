import React from 'react'
import Banner from './components/Banner';
import ImageMars from './components/ImageMars';
import Weather from './components/Weather';

const Home = () => {
    return (
        <>
            <Banner />
            <Weather />
            <ImageMars />
        </>
    )
}

export default Home
