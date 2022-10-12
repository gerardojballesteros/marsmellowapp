/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useRef, useEffect, useState} from 'react'
import logo from '../../assets/logo-marsmellow.svg'
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import 'animate.css';

export const Header = () => {

    const [showNav, setShowNav] = useState(false);

    const header = useRef()
    useEffect(() => {
        window.onscroll = ()=> {
            if (window.scrollY > 0) {
                    header.current.classList.add('header-bg');                
                } else {
                    header.current.classList.remove('header-bg');  
                }
            }
    }, [])
    const handleShowNav = ()=>{
        setShowNav(true);
    }
    const handleCloseNav = ()=>{
        setShowNav(false);
    }
    
    return (
        <header ref={header}>
            <nav className="nav-desk">
                <div className="logo-marsmellow">
                    <Link to="/">
                        <img src={logo} alt="" />
                    </Link>
                </div>
                <ul>
                    <li>
                        <Link to="/rovers">What is a Rover?</Link>
                    </li>
                    <li>
                        <a href="https://nasa.gov" target="_blank" rel="noreferrer">Documentation</a>
                    </li>
                    <li>
                        <a href="https://www.github.com/gerardojballesteros" target="_blank" rel="noreferrer">
                            <Icon icon="bi:github" color="white" width="23px" />
                        </a>
                    </li>
                </ul>
            </nav>
            <nav className="nav-mobile">
                <div className="logo-marsmellow">
                    <Link to="/">
                        <img src={logo} alt="" />
                    </Link>
                </div>
                <div className="burger">
                    <Icon onClick={()=> handleShowNav()}  icon="ph:circles-four-bold" color="white"  />
                </div>
            </nav>
            {
                showNav && (
                    <div className="bg-panel-nav">
                        <div className="panel-nav animate__animated animate__fadeInRight animate__faster">
                        <div className="btn-close">
                            <a onClick={handleCloseNav}><Icon icon="ep:close" color="white" /></a>
                        </div>
                            <ul>
                                <li>
                                    <Link onClick={handleCloseNav} to="/">Home</Link>
                                </li>
                                <li>
                                    <Link onClick={handleCloseNav} to="/rovers">What is a Rover?</Link>
                                </li>
                                <li>
                                    <a href="https://nasa.gov" target="_blank" rel="noreferrer">Documentation</a>
                                </li>
                                <li>
                                    <a href="https://www.github.com/gerardojballesteros" target="_blank" rel="noreferrer">
                                        <Icon icon="bi:github" color="white" width="23px" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                )
            }
            
            
        </header>
    )
}


export default Header
