import styles from "../styles/Home.module.css";

import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [col, setCol] = useState("rgba(255, 255, 255, 0.5)");

  function down() {
    setCol("white");
  }

  function up() {
    setCol("rgba(255, 255, 255, 0.5)");
  }

  return (
    <div>
      <Head>
        <title>Chat</title>
      </Head>

      <div className={styles.container}>
        <form className={styles.form}>
          <h3>Email</h3>
          <input
            type="text"
            required
            pattern="^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$"
          ></input>

          <h3>Password</h3>
          <input type="password" required></input>

          <button
            type="submit"
            onMouseDown={down}
            onMouseUp={up}
            style={{ backgroundColor: col }}
          >
            Log In
          </button>
        </form>

        <p>
          Don't have an account?{" "}
          <a className={styles.signUp} href="https://google.com">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}
