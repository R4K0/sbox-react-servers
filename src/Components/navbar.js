import "./navbar.css"

function Navbar(){
    return (
        <div className="pt-4 space-x-2">
            <a className="navbutton" href="/">servers</a>
            <a className="navbutton" href="/games">games</a>
            <a className="navbutton" href="/orgs">organizations</a>
        </div>
    )
}

export default Navbar;