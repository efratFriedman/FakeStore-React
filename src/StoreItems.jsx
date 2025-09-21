import { useEffect, useState } from "react";
import { getProducts } from "./services/service";
import './StoreItems.css';

const StoreItems = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getProducts().then((products) => {
      setItems(products);
    });
  }, []);

  return (
    <>
    <h1>Our products</h1>
    <div className="store-container">
      {items.map((item) => (
        <div className="store-card" key={item.id}>
          <img src={item.image} alt={item.title} className="store-image" />
          <h3 className="store-title">{item.title}</h3>
          <p className="store-description">{item.description}</p>
          <p className="store-price">${item.price}</p>
        </div>
      ))}
    </div>
    </>
  );
};

export default StoreItems;
