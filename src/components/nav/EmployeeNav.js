import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css"
import { NavLink } from "react-router-dom";

export const EmployeeNav = () => {
    const navigate = useNavigate()

    return (
        <header>
        <Link className="rymanNavLogo" to="/"><img src="https://ryman.com/wp-content/themes/ryman/images/ryman-130-logo-mbl.gif?quality=90&h=600" className="rymanNavLogo"></img></Link>
        <nav>

            <div className="leftNav">

                <NavLink exact activeClassName="active" to="/" className="left">Events</NavLink>
                <NavLink activeClassName="active" className="left" to="/events/create">Create Event</NavLink>

            </div>

            <div className="rightNav">


                    <Link to="" className="logout" onClick={() => {
                    localStorage.removeItem("ryman_user")
                    navigate("/", {replace: true})
                }}>Logout</Link>


            </div>

        </nav>
        </header>
    )
}