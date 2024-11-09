import React, { useEffect, useState } from "react";
import styles from "./HomePage.module.css";
import Card from "../components/Card";
import { IoRocketSharp } from "react-icons/io5";
import { useProductStore } from "../store/product";
import Toast from "../components/Toast";

const HomePage = (props) => {
  const { fetchProducts, products } = useProductStore();
  const [toast, setToast] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchProducts();
    if (toast === true) {
      setTimeout(() => setToast(false), 3000);
    }
  }, [fetchProducts, toast]);

  return (
    <div className={styles.container}>
      {toast === true ? <Toast crossToast={setToast} message={message} /> : ""}
      <h1
        className={styles.homeTitle}
        style={{
          color: props.homeBox === "white" ? "rgb(255,219,220)" : "white",
        }}
      >
        Current Products <IoRocketSharp className={styles.homeIcons} />{" "}
      </h1>
      {products.map((pd) => (
        <Card
          key={pd._id}
          product={pd}
          bg={props.homeBox}
          message={setMessage}
          cardToast={setToast}
        />
      ))}
    </div>
  );
};

export default HomePage;
