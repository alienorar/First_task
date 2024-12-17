import './hero.css';
import MainLogo from '../../assets/main-logo.svg';
import { NavLink } from 'react-router-dom';


const Hero = () => {
    return (
        <div className="hero">
            <nav className='container header_nav'>
                <div className="header_left">
                    <NavLink to="/">
                        <img src={MainLogo} alt="main-logo" />
                    </NavLink>
                    <ul className='header_links'>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                    </ul>
                </div>
                <button>contact us</button>
            </nav>

            <div className=" container hero_info ">
                <h1>Find the best <span>talent</span></h1>
                <p>Finding the right people and building high performing teams can be hard. Most companies aren’t tapping into the abundance of global talent. We’re about to change that.</p>
            </div>
        </div>
    );
};

export default Hero;
