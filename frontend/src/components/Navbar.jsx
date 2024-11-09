import React, { useState } from "react";
import { FaRegPlusSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { IoSunnySharp } from "react-icons/io5";
import { FaMoon } from "react-icons/fa6";
import { FaCartPlus } from "react-icons/fa";

const Navbar = (props) => {
  const [color, setColor] = useState("white");
  return (
    <div
      className={styles.navbar}
      style={{
        backgroundColor:
          color === "white" ? "rgb(255,219,220)" : "rgb(29,29,29)",
      }}
    >
      <Link to={"/"} className={styles.navProductPage}>
        Product Page <FaCartPlus />{" "}
      </Link>
      <div className={styles.navButtons}>
        <Link
          className={styles.createButton}
          to={"/create"}
          style={{ color: color === "white" ? "black" : "white" }}
        >
          <FaRegPlusSquare />
        </Link>
        <div
          className={styles.toggleButton}
          onClick={
            color === "white"
              ? () => {
                  props.bgClr("rgb(61,61,61)");
                  setColor("rgb(61,61,61)");
                }
              : () => {
                  props.bgClr("white");
                  setColor("white");
                }
          }
          style={{ color: color === "white" ? "black" : "white" }}
        >
          {color === "white" ? <FaMoon /> : <IoSunnySharp />}{" "}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
