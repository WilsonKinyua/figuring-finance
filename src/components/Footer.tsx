import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-main-color footer">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center footer-top">
            <p>
              <Link to="/">Start Here</Link> <Link to="/about">About</Link>{" "}
              <Link to="/contact">Contact</Link>{" "}
              {/* <Link to="/">Debt management</Link> <Link to="/">Budgeting</Link>{" "}
              <Link to="/">Wealth creation</Link> */}
            </p>
          </div>
        </div>
        <div className="row footer-bottom">
          <div className="col-sm-12 text-center">
            <p className="mb-4 text-white">
              <ol className="social mb-0">
                {/* <li>
                  <a href="" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                </li> */}
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
                {/* <li>
                  <a href="/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </a>
                </li> */}
              </ol>
              © Copyright {new Date().getFullYear()}{" "}
              <Link to="/">Figuring Finance</Link> All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
