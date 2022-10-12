import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import $ from "jquery";

export default function Navbar() {
  return (
    <>
      <div className="side-nav">
        <Link
          className="nav-close"
          onClick={() => {
            $(".side-nav").css("display", "none");
          }}
        >
          <FontAwesomeIcon icon={faXmark} />
        </Link>
        <div className="container">
          <div className="side-logo">
            <Link to="/">
              <img
                src="https://placeholder.com/wp-content/uploads/2018/10/placeholder.com-logo1.png"
                alt="Logo"
              />
            </Link>
          </div>
          <div className="side-menu">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Debt management
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Budgeting
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Wealth creation
                </Link>
              </li>
            </ul>
            <hr />
            <ul className="social mb-0">
              <li>
                <a href="/" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
              </li>
              <li>
                <a href="/" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>
              <li>
                <a href="/" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>
              <li>
                <a href="/" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faEnvelope} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link className="navbar-brand" to="/">
            {/* <img
            src="https://placeholder.com/wp-content/uploads/2018/10/placeholder.com-logo1.png"
            alt="Logo"
          /> */}
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
                <li
                  className="nav-item display-sm-none"
                  onClick={() => {
                    $(".side-nav").css("display", "block").hide().slideDown();
                  }}
                >
                  <Link className="nav-link" id="menu-bar">
                    <FontAwesomeIcon icon={faBars} />
                  </Link>
                </li>
                <span className="display-sm-block">
                  <li className="nav-item">
                    <Link to="/" className="nav-link">
                      Debt management
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/" className="nav-link">
                      Budgeting
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/" className="nav-link">
                      Wealth creation
                    </Link>
                  </li>
                </span>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
