import React from "react";


function Brokerage() {
  return (
    <section className="charges-bottom">
      <div className="container">

        {/* Top horizontal line */}
        <div className="top-line"></div>

        <div className="row">

          {/* Left Section */}
          <div className="col-lg-6 col-md-6 col-12">

            <div className="brokerage-section">

              <h3>Brokerage calculator</h3>

              <ul>
                <li>
                  Call &amp; Trade and RMS auto-squareoff: Additional
                  charges of ₹50 + GST per order.
                </li>

                <li>
                  Digital contract notes will be sent via e-mail.
                </li>

                <li>
                  Physical copies of contract notes, if required,
                  shall be charged ₹20 per contract note. Courier
                  charges apply.
                </li>

                <li>
                  For NRI account (non-PIS), 0.5% or ₹100 per
                  executed order for equity (whichever is lower).
                </li>

                <li>
                  For NRI account (PIS), 0.5% or ₹200 per executed
                  order for equity (whichever is lower).
                </li>

                <li>
                  If the account is in debit balance, any order placed
                  will be charged ₹40 per executed order instead of
                  ₹20 per executed order.
                </li>
              </ul>

            </div>

          </div>


          {/* Right Section */}
          <div className="col-lg-6 col-md-6 col-12">

            <div className="list-charges-section">

              <h3>List of charges</h3>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Brokerage;