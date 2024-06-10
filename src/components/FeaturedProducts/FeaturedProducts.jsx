import React from "react";
import "./FeaturedProducts.scss";
import Card from "../Card/Card";
import useFetch from '../../hooks/useFetch';
import Loading from '../Loading/Loading';
function FeaturedProducts(props) {
   const  {data, error, loading}= useFetch(`/products?populate=*&[filters][type][$eq]=${props.type}`);

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
          loading?<Loading/> : data? data.map((item) => (
            <Card key={item.id} item={item} />
          )) :null
        }
      </div>
    </div>
  );
}

export default FeaturedProducts;
