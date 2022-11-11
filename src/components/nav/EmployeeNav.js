import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css"

export const EmployeeNav = () => {
    const navigate = useNavigate()

    return (
        <header>
        <img src="https://store.ryman.com/media/wysiwyg/ryman-discover-more-ryman-site.jpg"></img>
        <nav>
            <ul>
        
                <li className="navLink left">Home</li>
                <Link className="navLink left" to="/events/create">Create Event</Link>
                <li className="navLink logout">
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