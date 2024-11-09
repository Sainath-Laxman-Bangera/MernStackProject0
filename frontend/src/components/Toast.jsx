import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import styles from "./Toast.module.css";

const Toast = (props) => {
  const handleToast = () => {
    props.crossToast(false);
  };
  return (
    <div className={styles.toast} style={{ backgroundColor: "lightgreen" }}>
      <span
        onClick={() => handleToast()}
        style={{
          cursor: "pointer",
          position: "absolute",
          top: "0",
          right: "0",
          marginRight: "5px",
          fontSize: "20px",
          fontWeight: "bold",
        }}
      >
        &times;
      </span>
      <h3>
        <FaCheckCircle style={{ color: "darkgreen" }} /> {props.message}
      </h3>
    </div>
  );
};

export default Toast;
