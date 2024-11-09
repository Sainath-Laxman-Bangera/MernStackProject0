import React, { useState, useEffect } from "react";
import styles from "./Modal.module.css";
import { useProductStore } from "../store/product";

const Modal = (props) => {
  const { updateProducts } = useProductStore();
  const [newUpdate, setNewUpdate] = useState(props.product);

  const handleUpdateProduct = async (pid, prod) => {
    await updateProducts(pid, prod);
    props.modalMessage("Product Updated Successfully");
    props.modalToast(true);
    props.onClose(false);
  };

  return (
    <div
      style={{
        zIndex: "1",
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        height: "100vh",
        backgroundColor: "rgba(0,0,0,0.5)",
      }}
    >
      <div
        className={styles.modal}
        style={{
          backgroundColor:
            props.bgHomeBox === "white" ? "white" : "rgb(29,29,29)",
        }}
      >
        <h1
          style={{
            width: "100%",
            textAlign: "center",
            color: props.bgHomeBox === "white" ? "black" : "white",
          }}
        >
          Update Product Info
        </h1>
        <input
          name="name"
          value={newUpdate.name}
          onChange={(e) => setNewUpdate({ ...newUpdate, name: e.target.value })}
          style={{
            backgroundColor:
              props.bgHomeBox === "white" ? "white" : "rgb(29,29,29)",
            color: props.bgHomeBox === "white" ? "black" : "white",
          }}
          type="text"
          placeholder="Name of Product"
        />
        <input
          name="price"
          value={newUpdate.price}
          onChange={(e) =>
            setNewUpdate({ ...newUpdate, price: e.target.value })
          }
          style={{
            backgroundColor:
              props.bgHomeBox === "white" ? "white" : "rgb(29,29,29)",
            color: props.bgHomeBox === "white" ? "black" : "white",
          }}
          type="text"
          placeholder="Price"
        />
        <input
          name="image"
          value={newUpdate.image}
          onChange={(e) =>
            setNewUpdate({ ...newUpdate, image: e.target.value })
          }
          style={{
            backgroundColor:
              props.bgHomeBox === "white" ? "white" : "rgb(29,29,29)",
            color: props.bgHomeBox === "white" ? "black" : "white",
          }}
          type="text"
          placeholder="Image URL"
        />
        <div style={{ display: "flex" }}>
          <div
            className={styles.btnUpdate}
            onClick={() => handleUpdateProduct(props.product._id, newUpdate)}
          >
            Update
          </div>
          <div
            className={styles.btnCancel}
            onClick={() => props.onClose(false)}
          >
            Cancel
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
