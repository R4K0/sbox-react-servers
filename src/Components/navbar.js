import { NavLink as Link } from "react-router-dom";
import "./navbar.css"

function Navbar(){
    return (
        <nav className="navbar pt-4 space-x-2">
            <Link className="navbutton" to="/" exact>servers</Link>
            <Link className="navbutton" to="/games">games</Link>
        </nav>
    )
}

export default Navbar;