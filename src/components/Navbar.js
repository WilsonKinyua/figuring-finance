import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img
            src="https://journeytolaunch.com/wp-content/uploads/2020/11/jtl-logo-main-color.png"
            alt="Logo"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
          <div className="d-flex">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Start Here
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" id="menu-bar">
                  <FontAwesomeIcon icon={faBars} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
