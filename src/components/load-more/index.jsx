import { useEffect, useRef, useState } from "react";
import "./styles.css";

export function LoadMore() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disableButton, setDisableButton] = useState(false);
  const dataFetch = useRef(false);

  async function fetchProducts() {
    setCount(count + 1);
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=10&skip=${count * 10}`
      );
      const result = await response.json();
      if (result && result.products && result.products.length) {
        setProducts((prevData) => [...prevData, ...result.products]);
        setLoading(false);
      } else {
        setDisableButton(true);
      }
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }

  useEffect(() => {
    if (dataFetch.current) return;
    dataFetch.current = true;
    fetchProducts();
  }, []);

  useEffect(() => {
    if (products && products.length === 50) setDisableButton(true);
  }, [products]);

  return (
    <div className="load-more-container">
      <div className="product-container">
        {products && products.length
          ? products.map((item) => (
              <div className="product" key={item.id}>
                <img src={item.thumbnail} alt={item.title} />
                <p>{item.title}</p>
              </div>
            ))
          : null}
      </div>
      {loading ? <div>Loading data ! Please wait.</div> : ""}
      <div className="button-container">
        {disableButton ? (
          <p>You have reached to 50 products</p>
        ) : (
          <button
            disabled={disableButton}
            onClick={() => {
              fetchProducts();
            }}
          >
            Load More Products
          </button>
        )}
      </div>
    </div>
  );
}
