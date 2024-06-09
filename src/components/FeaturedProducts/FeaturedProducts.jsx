import React from "react";
import "./FeaturedProducts.scss";
import Card from "../Card/Card";
import useFetch from '../../hooks/useFetch';
function FeaturedProducts(props) {

  const {products, loading, error} = useFetch(`/products?populate=*&[filters][type][$eq]=${props.type}`);
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
          loading? 'Loading' : products? products? products.map((item) => (
            <Card key={item.id} item={item} />
          )) : null:false
        }
      </div>
    </div>
  );
}

export default FeaturedProducts;
