import React from "react";
import "./FeaturedProducts.scss";
import Card from "../Card/Card";

function FeaturedProducts(props) {

  const products = [
    {
      id: 1,
      img: "https://dmfwoh5tsii9v.cloudfront.net/sites/files/hvv/1.%20Images/IMG_1363.PNG",
      img2: "https://ae01.alicdn.com/kf/H9ee5dc6fc46b4444b9abf887ccef3df39.jpg_640x640Q90.jpg_.webp",
      title: "Stylish Summer Dress",
      isNew: true,
      oldPrice: 59.99,
      price: 45.99,
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f",
      img2: "https://images.unsplash.com/photo-1542332213-9c4e1b0d1d48",
      title: "Casual Men's Jacket",
      isNew: false,
      oldPrice: 79.99,
      price: 59.99,
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1560347876-aeef00ee58a1",
      img2: "https://images.unsplash.com/photo-1484328256245-ecd6a1a83236",
      title: "Elegant Evening Gown",
      isNew: true,
      oldPrice: 120.0,
      price: 99.0,
    },
    {
      id: 4,
      img: "https://www.charlestyrwhitt.com/dw/image/v2/AAWJ_PRD/on/demandware.static/-/Sites-ctshirts-master/default/dw97ad9359/SUW0026IDG_MODEL_FULL.jpg?sw=430&sh=538&sm=fit&q=42",
      img2: "https://www.charlestyrwhitt.com/dw/image/v2/AAWJ_PRD/on/demandware.static/-/Sites-ctshirts-master/default/dw9f2f3eff/hi-res/SUB0506RYL_MODEL_FRONT.jpg?sw=960&sh=1200",
      title: "Classic Men's Suit",
      isNew: false,
      oldPrice: 250.0,
      price: 199.99,
    },
  ];

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{props.type} Products</h1>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas.

        </p>
      </div>
      <div className="bottom">
            {
                products.map((item)=> <Card key={item.id} item={item}/>)
            }
      </div>
    </div>
  );
}

export default FeaturedProducts;
