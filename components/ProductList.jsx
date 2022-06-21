import React from "react";
import ProductCard from "./ProductCard";
import styles from "../styles/ProductList.module.css";

const ProductList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>BEST RESTAURANT IN TOWN</h1>
      <p className={styles.desc}>
        We are best restaurant in kathmandu city. We serve quality and quantity
        food at our own place or at yours doorsteps. We have 5 outlets over
        Kathmandu valley and 7 outlets outside the kathmandu valley.
      </p>

      <div className={styles.wrapper}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default ProductList;
