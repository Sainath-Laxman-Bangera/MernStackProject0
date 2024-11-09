import React, { useState, useEffect } from "react";
import styles from "./CreatePage.module.css";
import { useProductStore } from "../store/product";
import Toast from "../components/Toast";

const CreatePage = (props) => {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    image: "",
  });
  const [toast, setToast] = useState(false);
  const [meessage, setMeessage] = useState("");
  const { createProduct } = useProductStore();

  const handleCreateProduct = async () => {
    const { success, message } = await createProduct(product);
    setMeessage(message);
    setToast(true);

    setProduct({ name: "", price: "", image: "" });
    console.log(toast, meessage);
  };

  useEffect(() => {
    if (toast === true) {
      setTimeout(() => setToast(false), 3000);
    }
  }, [toast]);

  return (
    <>
      {toast === true ? <Toast crossToast={setToast} message={meessage} /> : ""}
      <div
        className={styles.container}
        style={{
          backgroundColor:
            props.createBox === "white" ? "rgb(255,219,220)" : "black",
        }}
      >
        <h1
          style={{
            color: props.createBox === "white" ? "darkred" : "white",
            textAlign: "center",
            width: "100%",
          }}
        >
          Create Product
        </h1>
        <input
          name="name"
          value={product.name}
          onChange={(e) => setProduct({ ...product, name: e.target.value })}
          style={{
            backgroundColor:
              props.createBox === "white" ? "white" : "rgb(29,29,29)",
            color: props.createBox === "white" ? "black" : "white",
          }}
          type="text"
          placeholder="Name of Product"
        />
        <input
          name="price"
          value={product.price}
          onChange={(e) => setProduct({ ...product, price: e.target.value })}
          style={{
            backgroundColor:
              props.createBox === "white" ? "white" : "rgb(29,29,29)",
            color: props.createBox === "white" ? "black" : "white",
          }}
          type="text"
          placeholder="Price"
        />
        <input
          name="image"
          value={product.image}
          onChange={(e) => setProduct({ ...product, image: e.target.value })}
          style={{
            backgroundColor:
              props.createBox === "white" ? "white" : "rgb(29,29,29)",
            color: props.createBox === "white" ? "black" : "white",
          }}
          type="text"
          placeholder="Image URL"
        />
        <button
          onClick={() => handleCreateProduct()}
          className={styles.createButton}
        >
          Add Product
        </button>
      </div>
    </>
  );
};

export default CreatePage;
