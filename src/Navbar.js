import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Inertia</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/signup">Sign in</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;