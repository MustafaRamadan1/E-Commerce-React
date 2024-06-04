import React, { useState } from "react";
import "./Product.scss";
function Product() {
  const images = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Madrid_-_Sky_Bar_360%C2%BA_%28Hotel_Riu_Plaza_Espa%C3%B1a%29%2C_vistas_19.jpg/800px-Madrid_-_Sky_Bar_360%C2%BA_%28Hotel_Riu_Plaza_Espa%C3%B1a%29%2C_vistas_19.jpg",
    "https://www.spain.info/.content/imagenes/cabeceras-grandes/madrid/calle-gran-via-madrid-s333961043.jpg",
  ];

  const [selectedImg, setSelectedImg] = useState(images[0]);
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
    </div>
  );
}

export default Product;
