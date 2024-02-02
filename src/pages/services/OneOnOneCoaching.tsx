import {
  faBullseye,
  faLocationCrosshairs,
  faMoneyBillTransfer,
  faMound,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function OneOnOneCoaching() {
  const [module, setModule] = useState("");
  const [email, setEmail] = useState("");
  var [phone, setPhone] = useState("");

  const [error, setError] = useState<string | null>(false as any);
  const [success, setSuccess] = useState<string | null>(false as any);
  const [preloader, setPreloader] = useState<boolean>(false);

  const API_URL = "https://cms-figuring-finance.wezadevelopments.com";

  const onEnrollModule = (e: { preventDefault: () => void }) => {
    if (!phone) {
      phone = "N/A";
    }
    e.preventDefault();
    setPreloader(true);
    if (email && module) {
      fetch(`${API_URL}/api/enrollments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          module,
          email,
          phone_number: phone,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          setPreloader(false);
          setSuccess(data.message);
        })
        .catch((err) => {
          setPreloader(false);
          console.log(err);
        });
    } else {
      setError("Please fill all fields");
    }
  };

  return (
    <div className="coaching">
      <div className="container">
        <div className="row">
          <div className="col-md-12 pt-5 pb-3">
            <h1>One on One Coaching</h1>
          </div>
          <div className="col-md-6">
            <div className="card border-none mb-4 shadow-sm">
              <div className="text-center">
                <FontAwesomeIcon icon={faMoneyBillTransfer} />
              </div>
              <div className="card-body">
                <h4 className="text-center text-capitalize">
                  <span className="module orange-color">Module 1</span> -{" "}
                  Level-Up - Personal Finances
                </h4>
                <h5 className="text-center">Price - Ksh.14,000</h5>
                <ol>
                  <li>The right mindset is gold</li>
                  <li>The lifestyle "trap"</li>
                  <li>Demystifying money myths</li>
                  <li>Understanding your expenses</li>
                  <li>Differentiating assets and liabilities</li>
                  <li>Emotional spending and your triggers</li>
                  <li>Money personalities which one you are</li>
                  <li>The role of inflation and time value of money</li>
                  <li>A banking system that works</li>
                  <li>Types of capital</li>
                  <li>Ways of practicing financial discipline</li>
                  <li>Must have accounts</li>
                </ol>
              </div>
              <div className="text-center">
                <Link
                  to="#"
                  className="btn btn-primary btn-enroll-now"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={() => {
                    setModule("Module 1 - Level-Up - Personal Finances");
                  }}
                >
                  Enroll Now
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card border-none mb-4 shadow-sm">
              <div className="text-center">
                <FontAwesomeIcon icon={faLocationCrosshairs} />
              </div>
              <div className="card-body">
                <h4 className="text-center text-capitalize">
                  <span className="module orange-color">Module 2</span> - Boss
                  Budgeting
                </h4>
                <h5 className="text-center">Price - Ksh.8,000</h5>
                <ol>
                  <li>Deep dive of the importance of budgeting</li>
                  <li>Proven budgeting methods</li>
                  <li>Debunking budgeting myths</li>
                  <li>
                    Creating a budgeting system that integrates your investing,
                    debt and savings
                  </li>
                  <li>Budgeting on an irregular income</li>
                  <li>Understanding savings and investing</li>
                  <li>The need for sinking funds</li>
                </ol>
              </div>
              <div className="text-center">
                <Link
                  to="#"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={() => {
                    setModule("Module 2 - Boss Budgeting");
                  }}
                  className="btn btn-primary btn-enroll-now"
                >
                  Enroll Now
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card border-none mb-4 shadow-sm">
              <div className="text-center">
                <FontAwesomeIcon icon={faStar} />
              </div>
              <div className="card-body">
                <h4 className="text-center text-capitalize">
                  <span className="module orange-color">Module 3</span> -
                  Investing for your best Life
                </h4>
                <h5 className="text-center">Price - Ksh.21,000</h5>
                <ol>
                  <li>Time value of money</li>
                  <li>How investing works and compound interest</li>
                  <li>Difference with savings and investing</li>
                  <li>Learning how to do due diligence on investments</li>
                  <li>Unit Trusts</li>
                  <li>T-bills and bonds</li>
                  <li>Stock Market</li>
                  <li>Retirement planning</li>
                  <li>Avenue of savings</li>
                  <li>Financial and business analysis</li>
                  <li>Creating an investment plan</li>
                  <li>Tips to keep you on track with your investments</li>
                </ol>
              </div>
              <div className="text-center">
                <Link
                  to="#"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={() => {
                    setModule("Module 3 - Investing for your best Life");
                  }}
                  className="btn btn-primary btn-enroll-now"
                >
                  Enroll Now
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card border-none mb-4 shadow-sm">
              <div className="text-center">
                <FontAwesomeIcon icon={faBullseye} />
              </div>
              <div className="card-body">
                <h4 className="text-center text-capitalize">
                  <span className="module orange-color">Module 4</span> -
                  Setting And Achieving Financial Goals
                </h4>
                <h5 className="text-center">Price - Ksh.7,000</h5>
                <ol>
                  <li>Unpacking your Value-system</li>
                  <li>Knowing your why</li>
                  <li>Effective goal-setting skills</li>
                  <li>Creating your financial goals plan</li>
                  <li>Strategies to reach your financial goals</li>
                  <li>Factors to consider in financial planning</li>
                </ol>
              </div>
              <div className="text-center">
                <Link
                  to="#"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={() => {
                    setModule(
                      "Module 4 - Setting And Achieving Financial Goals"
                    );
                  }}
                  className="btn btn-primary btn-enroll-now"
                >
                  Enroll Now
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card border-none mb-4 shadow-sm">
              <div className="text-center">
                <FontAwesomeIcon icon={faMound} />
              </div>
              <div className="card-body">
                <h4 className="text-center text-capitalize">
                  <span className="module orange-color">Module 5</span> - Debt
                  Ditcher
                </h4>
                <h5 className="text-center">Price - Ksh.10,500</h5>
                <ol>
                  <li>Debt repayment avenues (Strategies to deal with debt)</li>
                  <li>Understanding interest when dealing with debt</li>
                  <li>Good vs. Bad debt</li>
                  <li>Creating plan to clear debt</li>
                  <li>Prioritizing your debt</li>
                  <li>Strategies for debt pay off methods</li>
                  <li>Tips and tricks to stay out of debt</li>
                </ol>
              </div>
              <div className="text-center">
                <Link
                  to="#"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={() => {
                    setModule("Module 5 - Debt Ditcher");
                  }}
                  className="btn btn-primary btn-enroll-now"
                >
                  Enroll Now
                </Link>
              </div>
            </div>
          </div>
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
                    <div className="mb-3">
                      <label htmlFor="phone" className="col-form-label">
                        Phone Number:
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        className="form-control"
                        onChange={(e) => {
                          setPhone(e.target.value);
                        }}
                      />
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
    </div>
  );
}
