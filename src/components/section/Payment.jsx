import React from 'react';
import './payment.css';

function Payment() {
  return (
    <div className="wrapper">
      <div className="payment">
        <div className="payment-logo">
          <p>p</p>
        </div>

        <h2>Payment Gateway</h2>
        <div className="form">
          <div className="card space icon-relative">
            <label className="label">Card holder:</label>
            <input type="text" className="input" placeholder="Coding Market" />
            <i className="fas fa-user"></i>
          </div>
          <div className="card space icon-relative">
            <label className="label">Card number:</label>
            <input
              type="text"
              className="input"
              data-mask="0000 0000 0000 0000"
              placeholder="Card Number"
            />
            <i className="far fa-credit-card"></i>
          </div>
          <div className="card-grp space">
            <div className="card-item icon-relative">
              <label className="label">Expiry date:</label>
              <input type="text" name="expiry-data" className="input" placeholder="00 / 00" />
              <i className="far fa-calendar-alt"></i>
            </div>
            <div className="card-item icon-relative">
              <label className="label">CVC:</label>
              <input type="text" className="input" data-mask="000" placeholder="000" />
              <i className="fas fa-lock"></i>
            </div>
          </div>

          <div className="btn">Pay</div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
