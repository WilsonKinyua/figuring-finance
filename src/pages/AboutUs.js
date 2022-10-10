import { Fragment } from "react";
import about from "../img/about.jpeg";
import support from "../icons/support.png";
import correct from "../icons/correct.png";
import brave from "../icons/protest.png";
import investments from "../icons/investments-accesibility.png";
export default function AboutUs() {
  return (
    <Fragment>
      <section className="about-us pt-5 mb-3">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="about-us-content pt-5 mt-5">
                <h5 className="text-uppercase">ABOUT</h5>
                <h1 className="mt-3 text-capitalize main-color">
                  The Journey to Launch Story
                </h1>
                <p className="mt-5">
                  Journey to Launch emerged in 2016 by founder Jamila Souffrant
                  initially as one person’s expedition to reach financial
                  independence. After one year of logging her transformational
                  growth to Financial Independence, the blog piqued the interest
                  of a larger audience which inspired the launch of the podcast.
                </p>
              </div>
            </div>
            <div className="col-md-5">
              <div className="img-wrapper">
                <img src={about} alt="owner" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-nude-color icons-section">
        <div className="container">
          <div className="row text-center icons g-0 ">
            <div className="col-md-3">
              <span className="icon-wrapper">
                <img src={support} alt="Support" />
                <h5>Support</h5>
              </span>
            </div>
            <div className="col-md-3">
              <span className="icon-wrapper">
                <img src={correct} alt="Sound Financial Education" />
                <h5>Sound Financial Education</h5>
              </span>
            </div>
            <div className="col-md-3">
              <span className="icon-wrapper">
                <img src={brave} alt="Brave" />
                <h5>Brave</h5>
              </span>
            </div>
            <div className="col-md-3">
              <span className="icon-wrapper">
                <img src={investments} alt="Accessibility" />
                <h5>Accessibility</h5>
              </span>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
