import React from "react";
import ProductCard from "./ProductCard";
import styles from "../styles/ProductList.module.css";

const ProductList = ({ pizzaList }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>BEST RESTAURANT IN TOWN</h1>
      <p className={styles.desc}>
        We are best restaurant in kathmandu city. We serve quality and quantity
        food at our own place or at yours doorsteps. We have 5 outlets over
        Kathmandu valley and 7 outlets outside the kathmandu valley.
      </p>

      <div className={styles.wrapper}>
        {pizzaList.map((pizza) => (
          <ProductCard key={pizza._id} pizza={pizza} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
