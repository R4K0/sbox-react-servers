import "./navbar.css"

function Navbar(){
    return (
        <div className="pt-4 space-x-2">
            <a className="navbutton">home</a>
            <a className="navbutton">gamemodes</a>
            <a className="navbutton">organizations</a>
        </div>
    )
}

export default Navbar;