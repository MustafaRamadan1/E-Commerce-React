import axios from "axios";
import { useEffect, useState } from "react";
import { makeRequest } from "../makingRequest";
 const useFetch = (url) => {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await makeRequest.get(`${url}`, {
          headers: {
            Authorization: `bearer ${process.env.REACT_APP_API_TOKEN}`,
          },
        });
        
        setProducts(data.data.data);
      } catch (err) {
        
        setError(true);

      }
      setLoading(false);
    };

    fetchData();

  }, [url]);

  return {products, loading, error}
};



export default useFetch;