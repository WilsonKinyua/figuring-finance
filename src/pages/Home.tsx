import { Fragment } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import landing from "../img/Figuring Finance Landing.png"
// import owner from "../img/2.jpeg";
import journey from "../img/journey.jpeg";
// import support from "../icons/support.png";
// import correct from "../icons/correct.png";
// import brave from "../icons/protest.png";
// import investments from "../icons/investments-accesibility.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function App() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Fragment>
      <section className="homepage">
        <div className="container">
          <div className="row">
            <div className="col-md-5"></div>
            <div className="col-md-7">
              <div className="homepage-content mb-5 pb-5">
                <h5 className="text-uppercase">
                  GET personal finance education
                </h5>
                <h1 className="mt-3 text-capitalize">
                  Personal Finance Education Simplified
                </h1>
                <p className="mt-5">
                  We aim to provide the right personal finance education and
                  resources to guide you in figuring out your finances and
                  transforming your money till your accounts are unrecognizable.{" "}
                  <strong>
                    Get started with the free Money Revamp Roadmap
                  </strong>
                </p>
                <form className="form-guide">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="mb-3">
                        <input
                          type="text"
                          className="form-control"
                          name="name"
                          placeholder="Name"
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="mb-3">
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          placeholder="Email"
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <button
                        type="submit"
                        className="btn btn-primary text-uppercase"
                      >
                        Send me the guide
                      </button>
                    </div>
                  </div>
                </form>
                <div className="signature"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="purple-bg"></div>
      </section>
      <section className="assessment">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <h5>FREE ASSESSMENT</h5>
              <h2 className="mt-4 mb-4">Unlock your future financial path.</h2>
              <p className="text-white">
                Take the quiz to get a shockingly accurate description of where
                you are and where to go on your journey to Financial
                Independence.
              </p>
              <Link to="/" className="btn btn-primary btn-lg mt-3 btn-bg-secondary">
                Read more{" "}
                <span>
                  <FontAwesomeIcon icon={faArrowRight} />
                </span>
              </Link>
            </div>
            <div className="col-md-7">
              <div className="img-wrapper">
                <img
                  src="https://images.pexels.com/photos/732444/pexels-photo-732444.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="owner"
                  className="img-fluid"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="journey">
        <div className="row" style={{ marginRight: "20px" }}>
          <div className="col-md-5">
            <div className="img-wrapper">
              <img src={journey} alt="Journey" loading="lazy" />
            </div>
          </div>
          <div className="col-md-7">
            <div className="row">
              <div className="col-md-12">
                <div className="journey-content">
                  <h5 className="text-uppercase">from our founder</h5>
                  <h2 className="mt-4 mb-4">Welcome To Figuring Finance</h2>
                  <p>
                    I love to teach individuals how to do better with their
                    money, to inspire them to take that bold step and ignite
                    your financial freedom journey.
                  </p>
                  <p>
                    In a dark time in my life I found myself wondering where all
                    my money was going, I could barely save, did not understand
                    the importance of investing, felt stuck and overwhelmed.
                    This led me to invest in my own personal finance education,
                    grow my savings and investment portfolio. What began as a
                    personal journey towards financial stability for my daughter
                    and I was a catalyst for helping others take control of
                    their personal finances and build the life they want to
                    live. You may have come across our Instagram page, other
                    social media handles, or a media interview whichever way you
                    found us we are glad you are here!
                  </p>
                  <p>
                    This website was made with you in mind to help you on your
                    financial freedom journey. You will find here resources,
                    actionable tools and our services provided to help you in
                    figuring out your personal finances. This is a journey you
                    will not regret taking.
                  </p>
                  <p>
                    Taking control of your money is a powerful tool that you can
                    utilize to build the life you want through actionable steps
                    such as:
                    <ul>
                      <li>Budgeting and Tracking your Spending</li>
                      <li>Saving and Investing</li>
                      <li>Ditching debt</li>
                      <li>Building real wealth</li>
                    </ul>
                  </p>
                  {/* <Link className="btn btn-primary btn-lg mt-3">
                    Read more{" "}
                    <span>
                      <FontAwesomeIcon icon={faArrowRight} />
                    </span>
                  </Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="assessment podcast">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <h2 className="mt-4 mb-4">Ancient Financial Wisdom</h2>
              <p className="pt-3">
                In this insightful talk we discussed;
                <ul>
                  <li>How do you make your money work for you?</li>
                  <li>
                    What are some common myths about some investments that hold
                    some people back?
                  </li>
                  <li>How does one know where to invest?</li>
                </ul>
              </p>
            </div>
            <div className="col-md-5">
              <div className="video-wrapper">
                <iframe
                  src="https://www.youtube.com/embed/k9LsphV9hi8"
                  title="Jam 316 Financial Clinic - 12/10/2022 (Ancient Financial wisdom)"
                  // frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  // allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="testimonies">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center mt-3 mb-3">
              <h2 className="main-color">Testimonies</h2>
            </div>
          </div>
          <div className="text-center">
            <Slider {...settings}>
              <div className="card">
                <div className="card-body">
                  <p className="card-text">
                    <q>
                      Hey Njams, merry christmas! Hope you and Malaika have been
                      existing to the fullest since we last spoke. I just wanted
                      to let you know that I recently cleared my entire credit
                      card balance! I appreciate you, and am thankful for the
                      counsel you offered by letting God use you to motivate me
                      this direction. May God bless you as you achieve your
                      wildest dreams.
                    </q>
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <p className="card-text">
                    <q>
                      Hey Njambi, I would like to express my appreciation for
                      your ability to help me with budgeting and financial
                      management. I’m in a better place now than I was last year
                      because of you. I have learned a lot from you. You are a
                      great financial coach and you were able to shed some light
                      by showing me how to value tracking my daily spending and
                      by saving. Also how to invest in stocks and opening online
                      savings accounts for emergency funds. I can never thank
                      you enough.
                    </q>
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <p className="card-text">
                    <q>
                      Hello, I trust that you are well. I would like to take
                      this opportunity by saying Thank-you so so much, the no
                      spend challenge taught me how to be disciplined with my
                      money. I was able to keep track of how much I was spending
                      as making a wholesale purchase of food rather from the
                      supermarket getting vegetables at the market , asking
                      myself over and over do I really want to purchase certain
                      items or do I really need these Items. And lastly i really
                      did save more! The Challenge was great hope to have more
                      and more coming. Thank you once again Manuella Kind
                      Regards
                    </q>
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <p className="card-text">
                    <q>
                      I would like to take this opportunity by saying Thank-you
                      so so much, the no spend challenge taught me how to be
                      disciplined with the purchases I made was able to keep
                      track of how much I was spending as making a wholesale
                      purchase of food rather from the supermarket getting
                      vegetables at the market , asking myself over and over do
                      I really want to purchase certain items or do I really
                      need these Items. And lastly i really did save more! The
                      Challenge was great hope to have more and more coming.
                      Thankyou once Manuella
                    </q>
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <p className="card-text">
                    <q>
                      My experience was amazing and such an eye opener, asi go
                      to acquire a sense of awareness in tracking my spending. I
                      also got to see how much money i can save if i stop
                      spending on things i shouldn't be spending on.
                    </q>
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <p className="card-text">
                    <q>
                      Hi Njambi! I hope you are doing well and are having a good
                      week! Thank you again for putting on the 10-day No Spend
                      Challenge. This was the first of its kind that I have done
                      before in order to keep track of my spending habits and
                      focus on what is a necessity rather than a want. The 10
                      days really accomplished this and helped me not only
                      realize how many non-budget spendings I do, but also how I
                      need to build consistency in making a budget and sticking
                      to it. This challenge gave me great next steps (learning
                      how to budget effectively being the main one) to take to
                      be able to manage my finances well. What resources or
                      advice do you have in regards to budgeting? I have seen
                      your posts on figuring finance and would definitely like
                      to lean into them. Overall I thoroughly enjoyed the
                      stretch this challenge gave - didn't feel impossible but
                      definitely pushed and brought a much needed challenge.
                      Thank you again for spearheading this! Have a great week
                      and I look forward to hearing from you! Best,
                    </q>
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <p className="card-text">
                    <q>
                      No spend challenge savings. I do alot of take out. The
                      money I saved in 10 days, bought these 2 to assist me cook
                      more n buy eliminate take out. Unless for special
                      occasions. I'm proud of the knowledge that I can save for
                      something away from my normal salary budget.
                    </q>
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <p className="card-text">
                    <q>
                      Hey. This is the best thing I have ever done in my soon to
                      be 39 years. I have learned how to manage my money. 1. I
                      have for the first time paid myself first. 2. I have been
                      able to reduce a debt that was weighing me down since I
                      have had my budget streamlined. I'm a happy lass. I don't
                      regret learning this now. Thanks Manuella. To many more
                      lessons and growth.
                    </q>
                  </p>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
