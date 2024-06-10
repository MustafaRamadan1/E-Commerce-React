import React, { useState } from "react";
import "./Products.scss";
import List from "../../components/List/List";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
function Products() {
  const catId = +useParams().id;
  const [maxPrice, setMaxPrice] = useState(700);
  const [sort, setSort] = useState(null);
  const [selectedSubCategories, setSelectedSubCategories] = useState([])
  const {data, loading, error} = useFetch(`/sub-categories?[filters][categories][id][$eq]=${catId}`);
  
  const handleChange =(e)=>{
    const isChecked = e.target.checked;
    const value = e.target.value;

    setSelectedSubCategories(isChecked? [...selectedSubCategories, value]: [...selectedSubCategories]);
    
    }
  console.log(selectedSubCategories)
  return (
    <div className="products">
      <div className="left">
        <div className="filterItem">
          <h2>Product Categories</h2>
          {
            data? data.map((item)=>{
              return (
                <div className="inputItem" key={item.id }>
                  <input type="checkbox" id={item.id} value={item.id} onChange={handleChange} />
                  <label htmlFor={item.id}>{item.attributes.title}</label>
                </div>
              )
            }) : null
          } 
        </div>
        <div className="filterItem">
          <h2>Filter by Price</h2>
          <div className="inputItem">
            <span>0</span>
            <input
              type="range"
              min={0}
              max={1000}
              defaultValue={700}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filterItem">
          <h2>Sort by</h2>
          <div className="inputItem">
            <input
              type="radio"
              id="asc"
              value={`asc`}
              name="price"
              onChange={() => setSort("asc")}
            />
            <label htmlFor="asc">Price (Lowest First)</label>
          </div>
          <div className="filterItem">
          <div className="inputItem">
            <input
              type="radio"
              id="asc"
              value={`asc`}
              name="price"
              onChange={() => setSort("desc")}
            />
            <label htmlFor="asc">Price (Highest First)</label>
          </div>
          </div>
        </div>
      </div>
      <div className="right">
        <img
          className="catImg"
          src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
        />
        <List catId={catId} sort={sort} maxPrice={maxPrice} />
      </div>
    </div>
  );
}

export default Products;
