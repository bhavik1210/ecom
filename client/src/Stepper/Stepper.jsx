import React, { useEffect, useState } from "react";

// import Stepperchild from './Stepperchild'
import { useDispatch, useSelector } from "react-redux";
import StepperRev from "./StepperRev";
import Customer from "./Customer";
import Payment from "./Payment";
import { clearCart } from "../Redux/Actions";
import { useNavigate } from "react-router-dom";

function Stepper() {
  const navigate = useNavigate()

  const [price ,setprice]=useState(0)
  const getdata = useSelector((state) => state.Reducers.cart);

  const [formData, setFormData] = useState(null);

  function handleFormDataUpdate(data) {
    setFormData(data);
  }

  console.log(formData)

  console.log(getdata);

  const [amount, setamount] = useState();
  console.log(amount);
  const dispatch = useDispatch()

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

  function handlepayment() {
    let data = {
      amount: price* 100,
      currency: "INR",
      receipt: "qwsaq1",
    };

    fetch("http://localhost:5000/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((result) => {
      result.json().then((res) => {
        setamount(res.id);
      });
    });

    var options = {
      key: "rzp_test_ZvQSHLZwoGK0V4", // Enter the Key ID generated from the Dashboard
      amount: data.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "Ru-brama", //your business name
      description: "Test Transaction",
      image: "https://example.com/your_logo",
      order_id: amount, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      callback_url: "/success",
      prefill: {
        //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
        name: "Gaurav Kumar", //your customer's name
        email: "gaurav.kumar@example.com",
        contact: "9000090000", //Provide the customer's phone number for better conversion rates
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };
    var rzp1 = new Razorpay(options);
    rzp1.open();
    
    rzp1.on("payment.success", function (e) {
      e.preventDefault();

      alert("Order placed successfully! Order ID: " + res.id);
      navigate("/success");
      dispatch(clearCart());
      // Dispatch an action to clear the cart upon successful payment
    });

  }

  const checkout_steps = [
    {
      name: "customer info",
      component: () => (
        <div>
          {" "}
          <Customer onFormDataUpdate={handleFormDataUpdate} />
        </div>
      ),
    },
    {
      name: "Shipping info",
      component: () => <div>Your shiping details
      {formData && (
            <div>
              <p>Email: {formData.email}</p>
              <p>Phone: {formData.num}</p>
              <p>Name: {formData.name}</p>
              <p>Address: {formData.address}</p>
              <p>City: {formData.city}</p>
              <p>Country: {formData.country}</p>
              <p>Postal Code: {formData.code}</p>
            </div>
          )}
      </div>,
    },
    {
      name: "Payment info",
      component: () => (
        <div>
          Payment information
          <h1>Total :- ₹ {price}</h1>
          <button onClick={handlepayment}>Pay</button>
        </div>
      ),
    },
    {
      name: "order info",
      component: () => <div>Your orders details</div>,
    },
  ];
  return (
    <div>
      <StepperRev steps={checkout_steps} />
    </div>
  );
}

export default Stepper;
