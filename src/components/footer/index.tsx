import { NavLink } from 'react-router-dom';
import MainLogo from '../../assets/main-logo.svg';
import './index.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer_left">
                    <div className="footer_logo">
                        <NavLink to="/">
                            <img src={MainLogo} alt="Main Logo" />
                        </NavLink>
                    </div>

                    {/* Navigation Links */}
                    <nav>
                        <ul className="footer_links">
                            <li>
                                <NavLink to="/">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/about">About</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>

                {/* Footer Information */}
                <div className="footer_info">
                    <p>
                        987 Hillcrest Lane <br />
                        Irvine, CA California 92714 <br />
                        Call Us: <a href="tel:9498337432">949-833-7432</a>
                    </p>
                </div>
                <div className="footer_contact">
             <div className='footer_icons'>
                        <i className="fa-brands fa-facebook"></i>
                        <i className="fa-brands fa-twitter"></i>
                        <i className="fa-brands fa-pinterest"></i>
             </div>
<p>Copyright 2020. All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;



