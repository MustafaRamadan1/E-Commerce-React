import React from "react";
import "./List.scss";
import Card from "../../components/Card/Card";
import useFetch from "../../hooks/useFetch";
function List(props) {


  return (
    <div className="list">
      {/* {products.map((product) => {
        return <Card key={product.id} item={product} />;
      })} */}
    </div>
  );
}

export default List;
