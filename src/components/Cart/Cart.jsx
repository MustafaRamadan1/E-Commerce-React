import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import './Cart.scss';
function Cart() {
  return (
    <div className="cart">
      <h3>Products in Your Cart</h3>
      <div className="cartItem">
        <div>
        <h3>Long Sleeve Graphic T-Shirt</h3>
        </div>
        <div className="item">
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
          <div className="info">
          <span className="description">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </span>
          </div>
        <DeleteIcon className="delete"/>
        </div>
        <p className="price">1 x $99 </p>
      </div>
    </div>
  );
}

export default Cart;
