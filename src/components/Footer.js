import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-main-color footer">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-5">
            <ul className="list-unstyled mb-0">
              <li>
                <Link>Start Here</Link>
              </li>
              <li>
                <Link>About</Link>
              </li>
              <li>
                <Link>Contact</Link>
              </li>
              <li>
                <Link>Debt management</Link>
              </li>
              <li>
                <Link>Budgeting</Link>
              </li>
              <li>
                <Link>Wealth creation</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="row footer-bottom">
          <div className="col-sm-12 text-center">
            <p className="mb-4 text-white mt-4">
              <ol className="social mb-0">
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
              </ol>
              © Copyright {new Date().getFullYear()}{" "}
              <Link>Figuring Finance</Link> All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
