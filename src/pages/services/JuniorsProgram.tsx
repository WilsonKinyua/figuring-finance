import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import axios from 'axios';
import { useState } from "react";
import { Link } from "react-router-dom";
import standing from "../../img/5.jpeg";
import standing2 from "../../img/6.jpeg";
import standing3 from "../../img/7.jpeg";

export default function JuniorsProgram() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  var [phone, setPhone] = useState("");

  const [error, setError] = useState<string | null>(false as any);
  const [success, setSuccess] = useState<string | null>(false as any);
  const [preloader, setPreloader] = useState<boolean>(false);

  const API_URL = "https://figuring-finance-email-notifications.vercel.app";

  const onEnrollModule = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setPreloader(true);
    if (email && name && phone) {
      try {
        const response = await axios.get(`${API_URL}/api/enrollment`, {
          params: {
            module: "Junior's Program",
            name,
            email,
            phone_number: phone,
          },
          headers: {
            "Content-Type": "application/json",
          },
        });
        setSuccess(response.data.message);
      } catch (error) {
        setError("Enrollment failed.");
      } finally {
        setPreloader(false);
      }
    } else {
      setError("Please fill all the fields.");
      setPreloader(false);
    }
  };

  return (
    <div className="coaching">
      <div className="container">
        <section className="journey the-journey-2 mt-3 mb-3">
          <div className="row">
            <div className="col-md-12 pt-5 text-center">
              <h1>Juniors Program</h1>
            </div>
            <div className="col-md-12">
              <div className="journey-content">
                <p>
                  As children transition from childhood to adulthood, and from financial dependency to
                  financial independence, this is the perfect time for them to develop essential personal finance
                  skills. These skills not only improve their lives but also contribute to the future development
                  of their societies
                </p>
                <p>
                  According to NASDAQ, it's estimated that 70% of wealthy families lose their wealth by the second generation, and 90% by the third. This often happens because:
                </p>
                <ul>
                  <li>
                    <p>
                      Money is rarely discussed between generations
                    </p>
                  </li>
                  <li>
                    <p>
                      Families fear the next generation may become entitled or lazy
                    </p>
                  </li>
                  <li>
                    <p>
                      Many lack a proper understanding of the value of money or how to manage it effectively
                    </p>
                  </li>
                </ul>
                <h4 className="mb-4">Why Financial Literacy Matters for Kids:</h4>
                <ul>
                  <li>
                    <p>
                      <strong className="orange-color">Critical life skills: </strong>
                      Financial literacy equips children with the essential skills needed to navigate real-world challenges.
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong className="orange-color">Financial independence: </strong>
                      Early financial education helps kids understand how to manage money, preparing them for future independence
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong className="orange-color">Better equipped to handle adulthood challenges: </strong> Learning how to budget, save, and invest prepares them for life’s financial demands.</p>
                  </li>
                  <li>
                    <p>
                      <strong className="orange-color">Prevention of financial mistakes: </strong> A lack of financial literacy can lead to costly mistakes; teaching these skills early helps prevent this.</p>
                  </li>
                  <li>
                    <p>
                      <strong className="orange-color">Early habits: </strong> Developing good financial habits at an early age sets the foundation for lifelong responsible money management.</p>
                  </li>
                  <li>
                    <p>
                      <strong className="orange-color">Generational impact: </strong> Financial literacy contributes to breaking cycles of instability, promoting sound financial decision-making for future generations.</p>
                  </li>
                  <li>
                    <p>
                      <strong className="orange-color">Proactive mindset: </strong> Encouraging kids to explore opportunities for earning and investing fosters a mindset of growth and financial responsibility.</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <h4 className="mb-4">Program Objectives:</h4>
              <ul>
                <li>
                  <p>
                    Teach basic financial concepts
                  </p>
                </li>
                <li>
                  <p>
                    Foster responsible money habits
                  </p>
                </li>
                <li>
                  <p>
                    Inspire financial confidence
                  </p>
                </li>
                <li>
                  <p>
                    Increase critical-thinking skills
                  </p>
                </li>
              </ul>
              <h4 className="mb-4">How We Teach:</h4>
              <p>
                Our juniors’ program is designed to engage children through interactive learning experiences, including:
              </p>
              <ul>
                <li>
                  <p>
                    <strong className="orange-color">Budgeting games </strong>
                    to help them understand income and expenses
                  </p>
                </li>
                <li>
                  <p>
                    <strong className="orange-color">Role-playing scenarios </strong>
                    that simulate real-world financial decisions
                  </p>
                </li>
                <li>
                  <p>
                    <strong className="orange-color">Financial education games</strong> that make learning fun and practical</p>
                </li>
                <li>
                  <p>
                    <strong className="orange-color">Contests and competitions </strong>to foster a sense of achievement and friendly competition</p>
                </li>
                <li>
                  <p>
                    <strong className="orange-color">Group discussions</strong> that encourage sharing ideas and problem-solving</p>
                </li>
              </ul>
              <p>
                This hands-on approach ensures that participants not only learn but also retain the skills needed to manage their finances confidently and responsibly.
              </p>
            </div>
            <div className="col-md-6">
              <Carousel
                autoPlay
                infiniteLoop
              >
                <div>
                  <div className="img-wrapper">
                    <img src={standing} alt="Journey" loading="lazy" />
                  </div>
                </div>
                <div>
                  <div className="img-wrapper">
                    <img src={standing2} alt="Journey" loading="lazy" />
                  </div>
                </div>
                <div>
                  <div className="img-wrapper">
                    <img src={standing3} alt="Journey" loading="lazy" />
                  </div>
                </div>
              </Carousel>
            </div>
          </div>
          <h4 className="mb-4">Interested in Our Next Program?</h4>
          <p>
            If you'd like to enroll your child in our upcoming personal finance holiday program, here are the details:
          </p>
          <ul>
            <li>
              <p>
                <strong className="orange-color">Duration: </strong>
                2-5 days
              </p>
            </li>
            <li>
              <p>
                <strong className="orange-color">Age Groups & Classes:</strong>
              </p>
              <ul>
                <li>
                  <p>
                    <strong>Ages 9-12</strong>
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Ages 13-17</strong>
                  </p>
                </li>
              </ul>
            </li>
            <li>
              <p>
                <strong className="orange-color">Time: </strong> 9 AM to 12 PM</p>
            </li>
            <li>
              <p>
                <strong className="orange-color">Cost: </strong>KSH 5,500</p>
            </li>
          </ul>
          <p>
            Please leave your email and contact details below, and we will notify you as soon as registration opens. We look forward to helping your child embark on their financial literacy journey!
          </p>
          <div className="text-center">
            <Link
              to="#"
              className="btn btn-primary btn-enroll-now"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Enroll Now
            </Link>
          </div>
        </section>
        {/* modal */}
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  How would you like to be contacted?
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                {error && <div className="alert alert-danger">{error}</div>}
                {success && (
                  <div className="alert alert-success">{success}</div>
                )}
                <form onSubmit={onEnrollModule}>
                  <div className="mb-3">
                    <label
                      htmlFor="name"
                      className="col-form-label required"
                    >
                      Name:
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="form-control"
                      required
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                    />
                  </div>
                  <div className="row">
                    <div className="mb-3 col-md-6">
                      <label
                        htmlFor="email"
                        className="col-form-label required"
                      >
                        Email:
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="form-control"
                        required
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                      />
                    </div>
                    <div className="mb-3 col-md-6">
                      <label htmlFor="phone"
                        className="col-form-label required"
                      >
                        Phone Number:
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        className="form-control"
                        required
                        onChange={(e) => {
                          setPhone(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    {preloader ? "Loading..." : "Save changes"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
