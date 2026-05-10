
import { NavLink } from "react-router-dom"
export default function Navbar() {
  return (
    <div>
      <header>
        <div className="logo">
            <h2>TripVista</h2>
        </div>
        <div className="nav">
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                 <li>
                    <NavLink to="/destination">Destinations</NavLink>
                </li>
                 <li>
                    <NavLink to="/packages">Packages</NavLink>
                </li>
                 <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                 <li>
                    <NavLink to="/contact">Contact</NavLink>
                </li>
            </ul>
        </div>
      </header>
    </div>
  )
}
