import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="wrapper">
            <div id="logo">
                <h1>Adventure Planner App</h1>
            </div>
            <div className="nav-links">
                <Link to='/'>Adventures</Link>
                <Link to='/favorites'>My Favorites</Link>
                <Link to='/create-adventure'>Create Adventure</Link>
            </div>
        </nav>
    )
}

export default Navbar
