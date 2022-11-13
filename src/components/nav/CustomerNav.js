import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css"

export const CustomerNav = () => {
    const navigate = useNavigate()

    return (
        <header>
        <Link className="rymanNavLogo" to="/"><img src="https://ryman.com/wp-content/themes/ryman/images/ryman-130-logo-mbl.gif?quality=90&h=600" className="rymanNavLogo"></img></Link>
        <nav>
            <ul>
                <li><Link to="/" className="navLink left">Events</Link></li>
                <li className="navLink">Liked</li>
                <li className="logout">
                    <Link to="" onClick={() => {
                    localStorage.removeItem("ryman_user")
                    navigate("/", {replace: true})
                }}>Logout</Link>
                </li>
            </ul>
        </nav>
        </header>
    )
}