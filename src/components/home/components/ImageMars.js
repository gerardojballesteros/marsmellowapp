import React, {useEffect, useState} from 'react'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";
import LazyLoad from 'react-lazyload';
import { Icon } from '@iconify/react';
import 'animate.css';

const ImageMars = () => {
    const [images, setImages] = useState([]);
    const [show, setShow] = useState(false);
    const [Photos2, setPhotos] = useState();
    const [isOpened, setIsOpened] = useState(false);
    const [rovers, setRovers] = useState('perseverance');
    const [sol, setSol] = useState('433');
    useEffect(() => {
        api();
    }, [rovers, sol])
    const api = async()=> {                                                                                                                                                                                                              
        const url = `https://mars-photos.herokuapp.com//api/v1/rovers/${rovers}/photos?sol=${sol}`;
        const res = await fetch(url);
        const data = await res.json();
        const dataShowImage = data.photos.slice(0, 100).map( response => {
            return {
                id: response.id,
                Photos: response.img_src
            }
        });
        setImages(dataShowImage)
    }
    const handleShow = (Photos) => {
        setPhotos(Photos)
        setShow(true);
        setIsOpened(true);
    }
    const handleClose = () => {
        setShow(false);
        setPhotos(null);
        setIsOpened(false);
    }
    const handleChange = (e) => {
        setSol(e.target.value);
      }
    return (
        <> 
            <section className="images-mars">
                <div className="images-mars__content">
                    <article className="txt">
                        <h4>Mars as <strong>never seen before.</strong></h4>
                        <p>Through the Marsmellow app you will be able to see 
                            the latest images photographed on mars by the spirit, opportunity and curiosity rovers. 
                            Remember that these images are updated by the image bank of the <b>National Aeronautics Administration (Nasa)</b></p>
                    </article>
                    <div className="btn-filter">
                        <button className="btn-white" type="button" onClick={()=> setRovers('spirit')}>Spirit</button>
                        <button className="btn-white" type="button" onClick={()=> setRovers('curiosity')}>Curiosity</button>
                        <button className="btn-white" type="button" onClick={()=> setRovers('opportunity')}>Opportunity</button>
                        <button className="btn-white" type="button" onClick={()=> setRovers('perseverance')}>Perseverance</button>
                        <label className="input-mars" htmlFor="input-mars">
                            <p>Day or Sol</p>
                            <input type="number" id="input-mars" onChange={handleChange} value={sol} />
                        </label>
                    </div>  
                    <article className="title-rover">
                        <p>Images of the <strong>{rovers} Rover</strong></p>
                    </article>
                    <ResponsiveMasonry className="gallery"  columnsCountBreakPoints={{350: 2, 750: 2, 900: 3, 1200: 5, 1600: 5}}>
                        <Masonry gutter="10px">
                        {
                            images.map( ({ id, Photos }) => {
                                return (
                                    <div key={id}>
                                        <LazyLoad height={300}  >
                                            <img 
                                            src={Photos} 
                                            onClick={() => handleShow(Photos)}
                                            style={{width: "100%", display: "block", cursor: "pointer"}}
                                            alt="" className="animate__animated animate__fadeIn " />
                                        </LazyLoad>
                                    </div>
                                )
                            })
                        }
                        </Masonry> 
                    </ResponsiveMasonry> 
                </div>
            </section>
            { isOpened && (
                <div className="modal">
                    <div className="modal__content">
                        <div className="btn-close">
                            <a onClick={handleClose}><Icon icon="ep:close" color="white" /></a>
                        </div>
                        <img src={Photos2} alt="" />
                    </div>
                </div>
            )
            }
        </>
    )
}

export default ImageMars
