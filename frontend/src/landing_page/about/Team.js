import React from "react";

function Team() {
  return (
    <div className="container">

      {/* Heading */}
      <div className="row mt-5 pt-4 mb-5 border-top ">
        <div className="col-12 mt-5">
          <h2 className="text-center fw-normal">People</h2>
        </div>
      </div>

      {/* People Section */}
      <div className="row align-items-start">

        {/* Left Side */}
        <div className="col-6 text-center">
          <img
            src="/images/nithinKamath.jpg"
            alt="Nithin Kamath"
            style={{
              width: "275px",
              height: "275px",
              borderRadius: "100%",
              objectFit: "cover",
            }}
          />

          <h4 className="mt-4 mb-4 fw-normal text-muted">
            Nithin Kamath
          </h4>

          <p className="text-muted mb-0">
            Founder, CEO
          </p>
        </div>

        {/* Right Side */}
        <div className="col-6 px-4 ">
          <p
            style={{
              fontSize: "17px",
              lineHeight: "1.8",
              color: "#424242",
              fontWeight: "400",
              marginBottom: "25px",
            }}
          >
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>

          <p
            style={{
              fontSize: "17px",
              lineHeight: "1.8",
              color: "#424242",
              fontWeight: "400",
              marginBottom: "25px",
            }}
          >
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>

          <p
            style={{
              fontSize: "17px",
              lineHeight: "1.8",
              color: "#424242",
              fontWeight: "400",
              marginBottom: "25px",
            }}
          >
            Playing basketball is his zen.
          </p>

          <p
            style={{
              fontSize: "17px",
              lineHeight: "1.8",
              color: "#424242",
              fontWeight: "400",
            }}
          >
            Connect on{" "}
            <a href="#" className="text-decoration-none">
              Homepage
            </a>{" "}
            /{" "}
            <a href="#" className="text-decoration-none">
              TradingQnA
            </a>{" "}
            /{" "}
            <a href="#" className="text-decoration-none">
              Twitter
            </a>
          </p>
        </div>

      </div>
    </div>
  );
}

export default Team;