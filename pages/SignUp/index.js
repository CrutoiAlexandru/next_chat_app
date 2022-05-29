import styles from "../../styles/SignUp.module.css";

import Head from "next/head";
import { useState } from "react";

export default function SignUp() {
  const [col, setCol] = useState("rgba(255, 255, 255, 0.5)");
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [displayWarningType, setDisplayWarningType] = useState("none");

  function down() {
    setCol("white");
  }

  function up() {
    setCol("rgba(255, 255, 255, 0.5)");
  }

  function check(event) {
    if (input1 !== input2) {
      event.preventDefault();
      setDisplayWarningType("block");
      return;
    }

    setDisplayWarningType("none");
  }

  return (
    <div>
      <Head>
        <title>Chat</title>
      </Head>

      <div className={styles.container}>
        <form className={styles.form} onSubmit={check}>
          <h3>Email</h3>
          <input
            type="text"
            required
            pattern="^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$"
          ></input>

          <h3>Password</h3>
          <input
            type="password"
            required
            value={input1}
            onInput={(e) => setInput1(e.target.value)}
          ></input>

          <h3>Confirm password</h3>
          <input
            type="password"
            required
            value={input2}
            onInput={(e) => setInput2(e.target.value)}
          ></input>

          <p style={{ display: displayWarningType }}>Passwords must match!</p>

          <button
            type="submit"
            onMouseDown={down}
            onMouseUp={up}
            style={{ backgroundColor: col }}
          >
            Sign Up
          </button>
        </form>

        <p>
          Already have an account?{" "}
          <a className={styles.signUp} href="/">
            Log In
          </a>
        </p>
      </div>
    </div>
  );
}
