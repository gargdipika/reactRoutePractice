// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <div className="header-background-container">
    <img
      className="image-wave"
      src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
      alt="wave"
    />
    <ul className="list-container">
      <li className="list-link">Wave</li>
      <li className="list-link">
        <Link to="/">Home</Link>
      </li>
      <li className="list-link">
        <Link to="/about">About</Link>
      </li>
      <li className="list-link">
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  </div>
)

export default Header
