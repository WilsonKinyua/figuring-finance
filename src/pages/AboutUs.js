import { Fragment } from "react";
import about from "../img/about.jpeg";

export default function AboutUs() {
  return (
    <Fragment>
      <section className="about-us">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="about-us-content">
                <h5 className="text-uppercase">ABOUT</h5>
                <h1 className="mt-3 text-capitalize">
                  The Journey to Launch Story
                </h1>
                <p className="mt-2">
                  Journey to Launch emerged in 2016 by founder Jamila Souffrant
                  initially as one person’s expedition to reach financial
                  independence. After one year of logging her transformational
                  growth to Financial Independence, the blog piqued the interest
                  of a larger audience which inspired the launch of the podcast.
                </p>
              </div>
            </div>
            <div className="col-md-7">
              <div className="img-wrapper">
                <img src={about} alt="owner" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
