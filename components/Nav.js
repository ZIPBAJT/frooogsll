import { Button } from "antd";
import styles from "../styles/Nav.module.css";
export function Nav() {
  return (
    <div className={styles.dive}>
      <div className={styles.sok}>
        <button
          className={styles.butt}
          onClick={() => (window.location.href = "/scetchess")}
        >
          scetches_of_p5
        </button>
        <button
          className={styles.butt}
          onClick={() => (window.location.href = "/ikone")}
        >
          ikone
        </button>{" "}
        <button
          className={styles.butt}
          onClick={() => (window.location.href = "/telegun")}
        >
          telegramm
        </button>{" "}
        <button
          className={styles.butt}
          onClick={() => (window.location.href = "/buttondownload")}
        >
          buttons_download
        </button>
      </div>
    </div>
  );
}
