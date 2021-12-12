import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <nav className="nav">
            <h3>Logo</h3>
            <div className="nav_links">
                <NavLink to="/">Login</NavLink>
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/profile">Profile</NavLink>
            </div>

        </nav>
    );
}

export default Nav;