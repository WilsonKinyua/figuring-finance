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
        <div className="row">
          <div className="col-md-12 text-center footer-top">
            <p>
              <Link>Start Here</Link> <Link>About</Link> <Link>Contact</Link>{" "}
              <Link>Debt management</Link> <Link>Budgeting</Link>{" "}
              <Link>Wealth creation</Link>
            </p>
          </div>
        </div>
        <div className="row footer-bottom">
          <div className="col-sm-12 text-center">
            <p className="mb-4 text-white">
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
