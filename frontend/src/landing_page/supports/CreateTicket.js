import React from "react";

function CreateTicket() {
  return (
    <section className="ticket-topics">
      <div className="container">

        {/* Heading */}
        <h5 className="ticket-heading fs-3">
          To create a ticket, select a relevant topic
        </h5>

        {/* ================= FIRST ROW ================= */}
        <div className="row topic-row">

          {/* Account Opening */}
          <div className="col-lg-4 col-md-6 col-12 topic-column">

            <h2 className="topic-title">
              <span className="topic-icon">⊕</span>
              Account Opening
            </h2>

            <div className="topic-links">

              <a href="#online">
                Online Account Opening
              </a>

              <a href="#offline">
                Offline Account Opening
              </a>

              <a href="#company">
                Company, Partnership and HUF Account Opening
              </a>

              <a href="#nri">
                NRI Account Opening
              </a>

              <a href="#charges">
                Charges at Zerodha
              </a>

              <a href="#idfc">
                Zerodha IDFC FIRST Bank 3-in-1 Account
              </a>

              <a href="#started">
                Getting Started
              </a>

            </div>
          </div>


          {/* Zerodha Account */}
          <div className="col-lg-4 col-md-6 col-12 topic-column">

            <h2 className="topic-title">
              <span className="topic-icon">♟</span>
              Your Zerodha Account
            </h2>

            <div className="topic-links">

              <a href="#login">
                Login Credentials
              </a>

              <a href="#modification">
                Account Modification and Segment Addition
              </a>

              <a href="#bank">
                DP ID and bank details
              </a>

              <a href="#profile">
                Your Profile
              </a>

              <a href="#transfer">
                Transfer and conversion of shares
              </a>

            </div>
          </div>


          {/* Trading */}
          <div className="col-lg-4 col-md-6 col-12 topic-column">

            <h2 className="topic-title">
              <span className="topic-icon">▥</span>
              Your Zerodha Account
            </h2>

            <div className="topic-links">

              <a href="#margin">
                Margin/leverage, Product and Order types
              </a>

              <a href="#kite">
                Kite Web and Mobile
              </a>

              <a href="#trading">
                Trading FAQs
              </a>

              <a href="#corporate">
                Corporate Actions
              </a>

              <a href="#sentinel">
                Sentinel
              </a>

              <a href="#api">
                Kite API
              </a>

              <a href="#pi">
                Pi and other platform
              </a>

              <a href="#stockreports">
                Stockreports+
              </a>

              <a href="#gtt">
                GTT
              </a>

            </div>
          </div>

        </div>


        {/* ================= SECOND ROW ================= */}
        <div className="row topic-row second-row">

          {/* Funds */}
          <div className="col-lg-4 col-md-6 col-12 topic-column">

            <h2 className="topic-title">
              <span className="topic-icon">▣</span>
              Funds
            </h2>

            <div className="topic-links">

              <a href="#adding-funds">
                Adding Funds
              </a>

              <a href="#withdrawal">
                Fund Withdrawal
              </a>

              <a href="#emandates">
                eMandates
              </a>

              <a href="#bank-account">
                Adding Bank Accounts
              </a>

            </div>
          </div>


          {/* Console */}
          <div className="col-lg-4 col-md-6 col-12 topic-column">

            <h2 className="topic-title">
              <span className="topic-icon">◯</span>
              Console
            </h2>

            <div className="topic-links">

              <a href="#reports">
                Reports
              </a>

              <a href="#ledger">
                Ledger
              </a>

              <a href="#portfolio">
                Portfolio
              </a>

              <a href="#challenge">
                60 Day Challenge
              </a>

              <a href="#ipo">
                IPO
              </a>

              <a href="#referral">
                Referral Program
              </a>

            </div>
          </div>


          {/* Coin */}
          <div className="col-lg-4 col-md-6 col-12 topic-column">

            <h2 className="topic-title">
              <span className="topic-icon">◯</span>
              Coin
            </h2>

            <div className="topic-links">

              <a href="#mutual-funds">
                Understanding Mutual Funds
              </a>

              <a href="#about-coin">
                About Coin
              </a>

              <a href="#buying">
                Buying and Selling through Coin
              </a>

              <a href="#sip">
                Starting an SIP
              </a>

              <a href="#portfolio-coin">
                Managing your Portfolio
              </a>

              <a href="#coin-app">
                Coin App
              </a>

              <a href="#moving">
                Moving to Coin
              </a>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default CreateTicket;