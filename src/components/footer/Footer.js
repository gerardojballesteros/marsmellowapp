import React from 'react'
import { Icon } from '@iconify/react';
const Footer = () => {
    return (
       <footer>
           <div className="footer__content">
               <p>Copyright © 2022 | Marsmellow App, powered by <a href="https://www.gerardoballesteros.com" target="_blank">Gerardo Ballesteros</a></p>
               <div>
                <p>More information </p>
                <a href="https://api.nasa.gov" target="_blank"><Icon id="nasa" icon="simple-icons:nasa" className="nasa-icon" color="white" width="50px" /></a>
               </div>
           </div>
       </footer>
    )
}

export default Footer
