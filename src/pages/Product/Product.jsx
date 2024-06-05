import React, { useState } from "react";
import "./Product.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import Cart from "../../components/Cart/Cart";

function Product() {
  const images = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Madrid_-_Sky_Bar_360%C2%BA_%28Hotel_Riu_Plaza_Espa%C3%B1a%29%2C_vistas_19.jpg/800px-Madrid_-_Sky_Bar_360%C2%BA_%28Hotel_Riu_Plaza_Espa%C3%B1a%29%2C_vistas_19.jpg",
    "https://www.spain.info/.content/imagenes/cabeceras-grandes/madrid/calle-gran-via-madrid-s333961043.jpg",
  ];

  const [selectedImg, setSelectedImg] = useState(images[0]);
  const [quantity, setQuantity] = useState(1);
  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img
            src={images[0]}
            alt=""
            style={{
              width: "300px",
              height: "200px",
            }}
            onClick={() => setSelectedImg(images[0])}
          />
          <img
            src={images[1]}
            alt=""
            style={{
              width: "300px",
              height: "200px",
            }}
            onClick={() => setSelectedImg(images[1])}
          />
        </div>
        <div className="mainImage">
          <img
            src={selectedImg}
            style={{ width: "100%", marginLeft: "30px", maxWidth: "800px" }}
            alt=""
          />
        </div>
      </div>

      <div className="right">
        <h2>Title</h2>
        <span className="price">$199</span>
        <p>
          To sorry world an at do spoil along. Incommode he depending do
          frankness remainder to. Edward day almost active him friend thirty
          piqued.
        </p>
        <div className="quantity">
          <button
            onClick={() => {
              quantity === 1 ? setQuantity(1) : setQuantity(quantity - 1);
            }}
          >
            -
          </button>
          <span>{quantity}</span>
          <button onClick={() => setQuantity(quantity + 1)}>+</button>
        </div>
        <button className="add" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <AddShoppingCartIcon/> Add to Cart</button>
          <div className="links">
              <div className="item">
                <FavoriteBorderIcon /> ADD TO WISH LIST
              </div>
              <div className="item">
                <BalanceIcon /> ADD TO COMPARE
              </div>
            </div>
            <div className="info">
              <span>Vendor: Polo</span>
              <span>Product Type: T-Shirt</span>
              <span>Tag: T-Shirt, Women, Top</span>
            </div>
            <hr />
            <div className="info">
              <span>DESCRIPTION</span>
              <hr />
              <span>ADDITIONAL INFORMATION</span>
              <hr />
              <span>FAQ</span>
            </div>
      </div>
   
    </div>
  );
}

export default Product;
