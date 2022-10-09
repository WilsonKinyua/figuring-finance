import React from "react";
import owner from "../img/2.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <React.Fragment>
      <section className="homepage">
        <div className="container">
          <div className="row">
            <div className="col-md-5"></div>
            <div className="col-md-5">
              <div className="homepage-content mb-5 pb-5">
                <h5>GET THE INSPIRATION YOU NEED TO</h5>
                <h1 className="mt-3">
                  Launch To Financial Freedom & Independence.
                </h1>
                <p className="mt-5">
                  We provide the ideas and resources to help you skyrocket your
                  savings, blast through your debt and ultimately launch you on
                  your journey to{" "}
                  <strong>Financial Freedom & Independence</strong>. Get started
                  with the Jumpstart guide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="assessment">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <h5>FREE ASSESSMENT</h5>
              <h2 className="mt-4 mb-4">Unlock your future financial path.</h2>
              <p>
                Take the quiz to get a shockingly accurate description of where
                you are and where to go on your journey to Financial
                Independence.
              </p>
              <Link className="btn btn-primary btn-lg mt-3">
                Read more{" "}
                <span>
                  <FontAwesomeIcon icon={faArrowRight} />
                </span>
              </Link>
            </div>
            <div className="col-md-7">
              <div className="img-wrapper">
                <img
                  src="https://journeytolaunch.com/wp-content/uploads/2020/11/JourneyToLaunch18.jpg"
                  alt="owner"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
