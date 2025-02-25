import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import $ from "jquery";
import logo from "../img/logo.png";

export default function Navbar() {
  return (
    <>
      <div className="side-nav">
        <Link
          to="#"
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
              <img src={logo} alt="Figuring Finance Logo" />
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
                <Link to="/contact" className="nav-link">
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
                <a
                  href="https://www.instagram.com/figuring_finance/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@figuringfinance8159"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="Figuring Finance Logo" />
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
                  <Link to="/about" className="nav-link">
                    About
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    to="#"
                  >
                    Services
                  </Link>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link
                        to="/services/1-1-coaching"
                        className="dropdown-item"
                      >
                        1:1 Coaching
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        to="/services/corporate-training"
                        className="dropdown-item"
                      >
                        Corporate Training
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link to="/contact" className="nav-link">
                    Contact
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/articles" className="nav-link">
                    articles
                  </Link>
                </li>
                {/* <li
                  className="nav-item display-sm-none"
                  onClick={() => {
                    $(".side-nav").css("display", "block").hide().slideDown();
                  }}
                >
                  <Link to="#" className="nav-link" id="menu-bar">
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
                </span> */}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
