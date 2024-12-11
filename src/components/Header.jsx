import { NavLink } from "react-router"

/**
 * Un composant React commence par une majuscule.
 */
function Header() {

    return (
        <header className="navbar bg-primary text-white">
            React Application
            <hr />
            <NavLink to="/">
                <button className="btn btn-info">Message</button>
            </NavLink>
            <NavLink to="/task">
                <button className="btn btn-info">Task Manager</button>
            </NavLink>
            <NavLink to="/theory">
                <button className="btn btn-info">Theory</button>
            </NavLink>
        </header>
    )
}

export default Header
