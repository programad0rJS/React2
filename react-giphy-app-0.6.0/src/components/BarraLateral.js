import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


const BarraLateral = () => {
    return (
        <Router>
            
        <div>
            <nav>
                <div className="navbar">
                    <i className='bx bx-menu'></i>
                    <div className="logo"><h1>Creador Josue</h1></div>
                    <div className="nav-links">
                        <ul className="links">
                            <li><Link to="/">Pagina Principal</Link></li>
                            <li>
                                <Link to="/Contactemos">HTML & CSS</Link>
                                <i className='bx bxs-chevron-down htmlcss-arrow arrow  '></i>
                                <ul className="htmlCss-sub-menu sub-menu">
                                    <li><Link to="./Contactemos">Web Design</Link></li>
                                    <li><Link to="/Contactemos">Login Forms</Link></li>
                                    <li><Link to="/Contactemos">Card Design</Link></li>
                                    <li className="more">
                                        <span><Link to="/Contactemos">More</Link>
                                            <i className='bx bxs-chevron-right arrow more-arrow'></i>
                                        </span>
                                        <ul className="more-sub-menu sub-menu">
                                            <li><Link to="/Contactemos">Neumorphism</Link></li>
                                            <li><Link to="/Contactemos">Pre-loader</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link to="/Contactemos">JAVASCRIPT</Link>
                                <i className='bx bxs-chevron-down js-arrow arrow'></i>
                                <ul className="js-sub-menu sub-menu">
                                    <li><Link to="/Contactemos">Dynamic Clock</Link></li>
                                    <li><Link to="/Contactemos">Form Validation</Link></li>
                                </ul>
                            </li>
                            <li><Link to="/SobreNosotros">SobreNosotros</Link></li>
                            <li><Link to="/Contactemos">CONTÁCTENOS</Link></li>
                        </ul>
                    </div>
                </div>

            </nav>
     
          
        </div>

        
        </Router>

    )
}

export default BarraLateral;
