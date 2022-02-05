import { Link } from 'react-router-dom';
import cssClass from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className="wrapper">
            <div id={cssClass.logo}>
                <h1>Adventure Planner App</h1>
            </div>
            <div className={cssClass.navLinks}>
                <Link to='/'>All Adventures</Link>
                <Link to='/favorites'>My Favorites</Link>
                <Link to='/create-adventure'>Create Adventure</Link>
            </div>
        </nav>
    )
}

export default Navbar
