import React, { useState, useContext } from "react";

import GeneralContext from "./GeneralContext";

import { Tooltip, Grow } from "@mui/material";

import { watchlist } from "../Data/Data";

import {
  BarChartOutlined,
  KeyboardArrowDown,
  KeyboardArrowUp,
  MoreHoriz,
} from "@mui/icons-material";

import { DoughnutChart } from "./DoughnoutChart";


// Watchlist ke stock names
const labels = watchlist.map((subArray) => subArray["name"]);


const WatchList = () => {

  const data = {
    labels,

    datasets: [
      {
        label: "Price",

        data: watchlist.map((stock) => stock.price),

        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 159, 64, 0.5)",
        ],

        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],

        borderWidth: 1,
      },
    ],
  };


  return (
    <div className="watchlist-container">

      {/* Search */}
      <div className="search-container">

        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />

        <span className="counts">
          {watchlist.length} / 50
        </span>

      </div>


      {/* Watchlist */}
      <ul className="list">

        {watchlist.map((stock, index) => (
          <WatchListItem
            stock={stock}
            key={index}
          />
        ))}

      </ul>


      {/* Doughnut Chart */}
      <DoughnutChart data={data} />

    </div>
  );
};


export default WatchList;


// ==================================================
// WATCHLIST ITEM
// ==================================================

const WatchListItem = ({ stock }) => {

  const [showWatchlistActions, setShowWatchlistActions] =
    useState(false);


  const handleMouseEnter = () => {
    setShowWatchlistActions(true);
  };


  const handleMouseLeave = () => {
    setShowWatchlistActions(false);
  };


  return (
    <li
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >

      <div className="item">

        {/* Stock Name */}
        <p className={stock.isDown ? "down" : "up"}>
          {stock.name}
        </p>


        <div className="itemInfo">

          {/* Percentage */}
          <span className="percent">
            {stock.percent}
          </span>


          {/* Arrow */}
          {stock.isDown ? (
            <KeyboardArrowDown className="down" />
          ) : (
            <KeyboardArrowUp className="up" />
          )}


          {/* Price */}
          <span className="price">
            {stock.price}
          </span>

        </div>

      </div>


      {/* Actions */}
      {showWatchlistActions && (
        <WatchListActions uid={stock.name} />
      )}

    </li>
  );
};


// ==================================================
// WATCHLIST ACTIONS
// ==================================================

const WatchListActions = ({ uid }) => {

  const generalContext = useContext(GeneralContext);


  // Buy button
  const handleBuyClick = () => {
    generalContext.openBuyWindow(uid);
  };


  return (
    <span className="actions">

      <span>

        {/* BUY */}
        <Tooltip
          title="Buy (B)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button
            className="buy"
            onClick={handleBuyClick}
          >
            Buy
          </button>
        </Tooltip>


        {/* SELL */}
        <Tooltip
          title="Sell (S)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="sell">
            Sell
          </button>
        </Tooltip>


        {/* ANALYTICS */}
        <Tooltip
          title="Analytics (A)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="action">
            <BarChartOutlined className="icon" />
          </button>
        </Tooltip>


        {/* MORE */}
        <Tooltip
          title="More"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="action">
            <MoreHoriz className="icon" />
          </button>
        </Tooltip>

      </span>

    </span>
  );
};