import { Button } from "antd";
import { useState } from "react";
import styles from "../styles/Nav.module.css";
import { Popover } from "antd";
import React from "react";

export function Nav() {
  //  coздает реакт переменую
  let [color, setColor] = useState("rgb(46, 136, 67)");

  let content = (
    <>
      <div
        onClick={() => setColor("red")}
        className={styles.colores}
        style={{ backgroundColor: "red" }}
      ></div>
      <div
        onClick={() => setColor("rgb(46, 136, 67)")}
        className={styles.colores}
        style={{ backgroundColor: "rgb(46, 136, 67)" }}
      ></div>
    </>
  );

  return (
    <div className={styles.dive}>
      <div className={styles.sok} style={{ borderColor: color }}>
        <Popover content={content} title="Title">
          <Button type="primary">Hover me</Button>
        </Popover>
        <button
          className={styles.butt}
          onClick={() => (window.location.href = "/scetchess")}
          style={{ borderColor: color }}
        >
          scetches_of_p5
        </button>
        <button
          className={styles.butt}
          onClick={() => (window.location.href = "/ikone")}
          style={{ borderColor: color }}
        >
          ikone
        </button>{" "}
        <button
          className={styles.butt}
          onClick={() => (window.location.href = "/telegun")}
          style={{ borderColor: color }}
        >
          telegramm
        </button>{" "}
        <button
          className={styles.butt}
          onClick={() => (window.location.href = "/buttondownload")}
          style={{ borderColor: color }}
        >
          buttons_download
        </button>
      </div>
    </div>
  );
}
