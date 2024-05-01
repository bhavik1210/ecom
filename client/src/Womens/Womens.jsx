import React, { useState } from "react";

import "../Mens/Mens.css";
import { useDispatch } from "react-redux";
import { Add } from "../Redux/Actions";
import { Link } from "react-router-dom";
import womens from "./Womensdata";

function Womens({ search }) {
  // console.log(mens)

  // console.log(search,"from mens")
  const [womensdata, setwomensdata] = useState(womens);
  // console.log(womensdata)

  function send(e) {
    const itemToAdd = { ...e, gender: "female" };
    dispatch(Add(itemToAdd));
  }

  const dispatch = useDispatch();

  // let text ="Hello world, welcome to the universe.";
  // console.log(text.includes("worssldsss"))

  let searchdatawomens = womensdata.filter((val) => {
    return val.title.toLowerCase().includes(search.toLowerCase());
  });
  // console.log(searchdata)

  return (
    <div className="mens">
      <div className="highlights">
        <h3>Earrings Sections</h3>
        <p>1033 Collections </p>
      </div>
      <div className="grid">
        {searchdatawomens.map((val, i) => {
          return (
            <div className="cards" key={i}>
              <div className="cardimg">
                <Link to={`/cartdetailspage/${val.id}`}>
                  <img src={val.imgurl} alt="" />
                </Link>
              </div>
              <div className="content">
                <h3>{val.title}</h3>
                <p>Rating : {val.rating}</p>
                <p>
                  Mrp ₹ <del>{val.oprice}</del> ₹ {val.disprice}{" "}
                </p>
                <p>free Delivery over ₹499</p>
                <button className="CartBtn" onClick={() => send(val)}>
                  <span className="IconContainer">
                    <i className="fa-solid fa-cart-shopping"></i>
                  </span>
                  <p className="text3">Add to Cart</p>
                </button>
                {/* <button onClick={()=>send(val)}>Add to cart</button> */}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Womens;
