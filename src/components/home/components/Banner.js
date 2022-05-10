import React from 'react'
import { Icon } from '@iconify/react';

const Banner = () => {
    return (
        <section className="banner">
            <div className="banner__content">
                <div className="bg-banner"></div>
                <article className="txt">
                    <h1>Welcome to the best <br />
                    and most <strong>Martian photography <br />
                    web application</strong> of all time.</h1>
                    <span>In cooperation with the <p> National Aeronautics Administration</p> <Icon id="nasa" icon="simple-icons:nasa" className="nasa-icon" color="white" width="5vw" /> </span>
                </article>
            </div>
        </section>
    )
}

export default Banner
