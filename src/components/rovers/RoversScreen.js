import React from 'react'


const RoversScreen = () => {
    return (
        <section className="rovers">
            <div className="rovers__content">
                <article className="txt">
                    <h1>This is a <strong>Rover.</strong></h1>
                    <ul>
                        <li>
                            <p><b>Mission Name:</b>  Mars 2020</p>
                        </li>
                        <li>
                            <p><b>Rover Name:</b> Perseverance</p>
                        </li>
                        <li>
                            <p><b>Main Job:</b> Seek signs of ancient life and collect samples of rock and regolith (broken rock and soil) for possible return to Earth.</p>
                        </li>
                        <li>
                            <p><b>Launch:</b> July 30, 2020</p>
                        </li>
                        <li>
                            <p><b>Tech Demo: </b> The Mars Helicopter completed its 30-day technology demonstration and is now in its new operations demo phase.</p>
                        </li>
                        <li>
                            <p><b>More information <a href="https://mars.nasa.gov">Mars Nasa</a></b></p>
                        </li>                        
                    </ul>
                </article>
                <iframe title="Perceverance by Nasa"  src='https://mars.nasa.gov/layout/embed/model/?s=6' width='100%'  scrolling='no'  ></iframe>
            </div>
        </section>
    )
}

export default RoversScreen
