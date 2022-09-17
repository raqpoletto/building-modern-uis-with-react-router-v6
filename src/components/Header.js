import { NavLink } from "react-router-dom";
import logo from "../assets/red30-tech-logo.png";

function Header() {
  const getClass = ({ isActive }) => (isActive ? "nav-active" : null);

  return (
    <div>
      <header className="container">
        <NavLink to="/">
          <img
            className="logo"
            src={logo}
            alt="Red30 Tech Logo"
            title="Red30 Tech | Home"
          />
        </NavLink>

        <nav>
          <NavLink to="/" className={getClass}>
            Home
          </NavLink>
          <NavLink to="/about" className={getClass}>
            About
          </NavLink>
          <NavLink to="/categories" className={getClass}>
            Categories
          </NavLink>
          <NavLink to="/register" className={getClass}>
            Register
          </NavLink>
        </nav>
      </header>
    </div>
  );
}

export default Header;
