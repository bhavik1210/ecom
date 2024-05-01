import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Customer.css";
import { Add, Desc, Remove } from "../Redux/Actions";
import { useNavigate } from "react-router-dom";

function Customer({ onFormDataUpdate }) {
  const [price, setprice] = useState(0);
  const[email,setemail] =useState("")
  const[num,setnum] =useState("")
  const[name,setname] =useState("")
  const[address,setaddress] =useState("")
  const[city,setcity] =useState("")
  const[country,setcountry] =useState("")
  const[code,setcode] =useState("")
  const[sendshipdata,setsendshipdata] =useState("")



function collectdata(e){
  e.preventDefault()
  let formData= {email,num,name,address,city,country,code}
  onFormDataUpdate(formData)
}

  const getdata = useSelector((state) => state.Reducers.cart);
  console.log(getdata);

  const dispatch = useDispatch()

  function decrement(items){
    dispatch(Desc(items))
}
const navigate = useNavigate()

function del(id){
    dispatch(Remove(id))
    navigate("/Checkout")
}
  function send(e) {
      dispatch(Add(e))
  }

  function total() {
    let price = 0;
    getdata.map((val) => {
      return (price = val.disprice * val.quantity + price);
    });
    setprice(price);
  }
  useEffect(() => {
    total();
  }, [total]);
  return (
    <div className="customermain">
      <header>
        <h3>Checkout</h3>
      </header>

      <main>
        <section className="checkout-form">
          <form >
            <h6>Contact information</h6>
            <div className="form-control">
              <label for="checkout-email">E-mail</label>
              <div>
                <span className="fa fa-envelope"></span>
                <input
                  type="email"
                  id="checkout-email"
                  name="checkout-email"
                  placeholder="Enter your email..."
                  value={email}
                  onChange={(e)=>{setemail(e.target.value)}}
                />
              </div>
            </div>
            <div className="form-control">
              <label for="checkout-phone">Phone</label>
              <div>
                <span className="fa fa-phone"></span>
                <input
                  type="tel"
                  name="checkout-phone"
                  id="checkout-phone"
                  placeholder="Enter you phone..."
                  value={num}
                  onChange={(e)=>{setnum(e.target.value)}}
                />
              </div>
            </div>
            <br />
            <h6>Shipping address</h6>
            <div className="form-control">
              <label for="checkout-name">Full name</label>
              <div>
                <span className="fa fa-user-circle"></span>
                <input
                  type="text"
                  id="checkout-name"
                  name="checkout-name"
                  placeholder="Enter you name..."
                  value={name}
                  onChange={(e)=>{setname(e.target.value)}}
                />
              </div>
            </div>
            <div className="form-control">
              <label for="checkout-address">Address</label>
              <div>
                <span className="fa fa-home"></span>
                <input
                  type="text"
                  name="checkout-address"
                  id="checkout-address"
                  placeholder="Your address..."
                  value={address}
                  onChange={(e)=>{setaddress(e.target.value)}}
                />
              </div>
            </div>
            <div className="form-control">
              <label for="checkout-city">City</label>
              <div>
                <span className="fa fa-building"></span>
                <input
                  type="text"
                  name="checkout-city"
                  id="checkout-city"
                  placeholder="Your city..."
                  value={city}
                  onChange={(e)=>{setcity(e.target.value)}}
                />
              </div>
            </div>
            <div className="form-group">
              <div className="form-control">
                <label for="checkout-country">Country</label>
                <div>
                  <span className="fa fa-globe"></span>
                  <input
                    type="text"
                    name="checkout-country"
                    id="checkout-country"
                    placeholder="Your country..."
                    list="country-list"
                    value={country}
                  onChange={(e)=>{setcountry(e.target.value)}}
                  />
                  <datalist id="country-list">
                    <option value="India"></option>
                    <option value="USA"></option>
                    <option value="Russia"></option>
                    <option value="Japan"></option>
                    <option value="Egypt"></option>
                  </datalist>
                </div>
              </div>
              <div className="form-control">
                <label for="checkout-postal">Postal code</label>
                <div>
                  <span className="fa fa-archive"></span>
                  <input
                    type="numeric"
                    name="checkout-postal"
                    id="checkout-postal"
                    placeholder="Your postal code..."
                    value={code}
                  onChange={(e)=>{setcode(e.target.value)}}
                  />
                </div>
              </div>
            </div>
            <div className="form-control checkbox-control">
              <input
                type="checkbox"
                name="checkout-checkbox"
                id="checkout-checkbox"
              />
              <label for="checkout-checkbox">
                Save this information for next time
              </label>
            </div>
            <div className="form-control-btn">
              <button onClick={collectdata}>Continue</button>
            </div>
          </form>
        </section>

        <section className="checkout-details">
          <div className="checkout-details-inner" >
            {getdata.map((val, i) => {
              return (
                <>
                  <div className="checkout-lists" key={i}>
                    <div className="card">
                      <div className="card-image">
                        <img src={val.imgurl} alt="" />
                      </div>
                      <div className="card-details">
                        <div className="card-name">{val.title}</div>
                        <div className="card-price">
                          ₹{val.disprice}
                          <span>₹{val.oprice}</span>
                        </div>
                        <div className="card-wheel">
                          <button onClick={val.quantity <= 1 ? ()=>del(val.id) :  ()=>decrement(val)}>-</button>
                          <span>{val.quantity}</span>
                          <button onClick={()=>send(val)}>+</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}

            <div className="checkout-shipping">
              <h6>Shipping</h6>
              <p>Free Shipping</p>
            </div>
            <div className="checkout-total">
              <h6>Total</h6>
              <p>₹{price}</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Customer;
