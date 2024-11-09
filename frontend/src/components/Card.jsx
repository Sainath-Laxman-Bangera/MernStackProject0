import React, { useState } from "react";
import styles from "./Card.module.css";
import { FaEdit } from "react-icons/fa";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { useProductStore } from "../store/product";
import Modal from "./Modal";

const Card = (props) => {
  const [onOpen, onClose] = useState(false);
  const { deleteProducts } = useProductStore();
  const handleDeleteProducts = async (pid) => {
    const { success, message } = await deleteProducts(pid);
    props.cardToast(true);
    props.message(message);
  };
  const editButton = () => {
    onClose(true);
  };

  return onOpen === false ? (
    <div
      className={styles.card}
      style={{
        backgroundColor:
          props.bg === "white" ? "rgb(255,219,220)" : "rgb(11, 25, 44)",
      }}
    >
      <img
        src={props.product.image}
        alt="Image Description"
        className={styles.cardImage}
      />
      <div className={styles.cardContent}>
        <h2
          className={styles.cardTitle}
          style={{ color: props.bg === "white" ? "darkred" : "white" }}
        >
          {props.product.name}
        </h2>
        <p className={styles.cardPrice}>${props.product.price}</p>
        <div className={styles.cardButtons}>
          <button
            className={`${styles.btn} ${styles.btnPrimary}`}
            onClick={() => editButton()}
          >
            <FaEdit />
          </button>
          <button
            className={`${styles.btn} ${styles.btnSecondary}`}
            onClick={() => handleDeleteProducts(props.product._id)}
          >
            <MdOutlineDeleteOutline />
          </button>
        </div>
      </div>
    </div>
  ) : (
    <Modal
      onClose={onClose}
      modalMessage={props.message}
      modalToast={props.cardToast}
      bgHomeBox={props.bg}
      product={props.product}
    />
  );
};

export default Card;
