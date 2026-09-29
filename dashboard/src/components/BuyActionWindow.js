import React, { useState, useContext } from "react";

import { Link } from "react-router-dom";

import axios from "axios";

import GeneralContext from "./GeneralContext";

import "./BuyActionWindow.css";


const BuyActionWindow = ({ uid }) => {

    // ⭐ IMPORTANT
    const { closeBuyWindow } = useContext(GeneralContext);


    const [stockQuantity, setStockQuantity] =
        useState(0);


    const [stockPrice, setStockPrice] =
        useState(0);


    // ================= BUY CLICK =================

    const handleBuyClick = () => {

        axios.post("https://zerodha-stcokmarketbackend.onrender.com/newOrder", {

            name: uid,

            qty: stockQuantity,

            price: stockPrice,

            mode: "BUY",

        })

        .then(() => {

            closeBuyWindow();

        })

        .catch((error) => {

            console.log(error);

        });

    };


    // ================= CANCEL =================

    const handleCancelClick = () => {

        closeBuyWindow();

    };


    return (

        <div
            className="container"
            id="buy-window"
            draggable="true"
        >

            <div className="regular-order">

                <div className="inputs">

                    {/* ================= QUANTITY ================= */}

                    <fieldset>

                        <legend>Qty.</legend>

                        <input
                            type="number"
                            name="qty"
                            id="qty"
                            onChange={(e) =>
                                setStockQuantity(
                                    e.target.value
                                )
                            }
                            value={stockQuantity}
                        />

                    </fieldset>


                    {/* ================= PRICE ================= */}

                    <fieldset>

                        <legend>Price</legend>

                        <input
                            type="number"
                            name="price"
                            id="price"
                            step="0.05"
                            onChange={(e) =>
                                setStockPrice(
                                    e.target.value
                                )
                            }
                            value={stockPrice}
                        />

                    </fieldset>

                </div>


                {/* ================= BUTTONS ================= */}

                <div className="buttons">

                    <span>
                        Margin required ₹14.65
                    </span>


                    <div>

                        {/* BUY */}

                        <button
                            className="btn btn-blue"
                            onClick={handleBuyClick}
                        >
                            Buy
                        </button>


                        {/* CANCEL */}

                        <Link
                            className="btn btn-grey"
                            to="#"
                            onClick={handleCancelClick}
                        >
                            Cancel
                        </Link>

                    </div>

                </div>

            </div>

        </div>

    );
};


export default BuyActionWindow;