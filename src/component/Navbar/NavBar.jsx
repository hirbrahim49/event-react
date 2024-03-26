import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './NavBar.css'
const NavBar = () => {
  return (
    <nav>
       <Link className='title' to="/">WEBSITE</Link>
       <div className='menu'>
       
        <ul>
            <li>
          <NavLink to="/about">About</NavLink>
            </li>
            <li>
          <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
            <NavLink to="/services">Services</NavLink>
            </li>
        </ul>
        </div>
    </nav>
  )
}

export default NavBar
