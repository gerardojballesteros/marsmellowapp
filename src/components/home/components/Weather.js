import React, {useEffect, useState, useRef} from 'react'
import { Icon } from '@iconify/react';
import Moment from 'react-moment';
import 'moment-timezone';
import 'animate.css';

const Weather = () => {
    const carouselNews = useRef();
    const [weather, setWeather] = useState([]);   
    useEffect(() => {
        apiWeather();
    }, [])
    const apiWeather = async () => {
        const url = "https://mars.nasa.gov/rss/api/?feed=weather&category=msl&feedtype=json&date";
        const resp = await fetch( url );
        const data = await resp.json();
        const showData = data.soles.map( response => {
            return{
                id: response.id,
                sol: response.sol,
                datetime: response.terrestrial_date,
                tempMax: response.max_temp,
                tempMin: response.min_temp,
                sunrise: response.sunrise,
                sunset: response.sunset
            }
        })
        setWeather(showData);
    } 
    return (
        <section className="weather animate__animated animate__fadeInDown">
            <div className="weather__content">
                <article className="txt" ref={carouselNews}>
                    {weather.slice(0,1).map( ({ id, sol, datetime, tempMax, tempMin, sunrise, sunset }) => {
                            return (
                                <ul key={id} >
                                    <li>
                                        <p><span>Latest Weather at <b>Gale Crater</b></span></p>
                                    </li>
                                    <li>
                                        <p><Icon icon="fa-solid:sun" color="white" width="23px" /> Sol <span>{sol}</span></p>
                                    </li>
                                    <li>
                                        <p><Icon icon="bi:calendar-date-fill" color="white" width="21px" />
                                        Last Update &nbsp; <Moment date={datetime} format="D MMM YYYY" /></p>
                                    </li>
                                    <li>
                                        <p><Icon icon="fluent:weather-sunny-28-filled" color="white" width="27px" /> High <span> {tempMax}° F | C</span></p>
                                    </li>
                                    <li>
                                        <p><Icon icon="fluent:weather-moon-48-filled" color="white" width="24px" /> Low <span> {tempMin}° F | C</span></p>
                                    </li>
                                    <li>
                                        <p><Icon icon="bi:sunrise-fill" color="white" height="24" /> Sunrise <span>{sunrise} HR</span></p>
                                    </li>
                                    <li>
                                        <p><Icon icon="bi:sunset-fill" color="white" height="24" /> Sunset <span>{sunset} HR</span></p>
                                    </li>
                                </ul>
                            )
                        })
                    }
                </article>
            </div>
        </section>
    )
}

export default Weather
