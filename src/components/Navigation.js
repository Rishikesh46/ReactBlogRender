// import Link from "next/link";
import { Link } from "react-router-dom";
import styles from "../styles/Home.module.css";

function Navigation() {
  return (
    <nav className={styles["header"]}>
      <div className={styles["navigation"]}>
        <ul>
          <li className={styles["nav-link"]}>
            <Link className={styles["blog-title"]} to={{ pathname: `/` }}>
              <p>Home</p>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Navigation;
