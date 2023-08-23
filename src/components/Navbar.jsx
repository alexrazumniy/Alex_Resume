import { NavLink } from "react-router-dom";
import BtnDarkMode from "./BtnDarkMode";

const Navbar = () => {
  const activeLink = "nav-list__link nav-list__link--active";
  const normalLink = "nav-list__link";

  return (
    <div>
      <nav className="nav">
        <div className="container">
          <div className="nav-row">
            <NavLink to="/" className="logo">
              <strong>Freelancer</strong> portfolio
            </NavLink>

            <BtnDarkMode />

            <ul className="nav-list">
              <li className="nav-list__link">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                  Home
                </NavLink>
              </li>

              <li className="nav-list__link">
                <NavLink
                  to="/projects"
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                  Projects
                </NavLink>
              </li>
              <li className="nav-list__link">
                <NavLink
                  to="/contacts"
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                  Contacts
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
