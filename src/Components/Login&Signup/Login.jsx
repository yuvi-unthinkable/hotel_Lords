import React from "react";
import styles from "./LoginSignup.module.css";
import { useNavigate } from "react-router";
import { Link } from "react-router";

export default function Login() {

    const navigate = useNavigate();
    
    const  handleHomeClick = () => {
        navigate("homepage")
    
    }

  return (
    <div className={styles.loginsignup}>
      <div className={styles.container} i>
        <nav>
          <img src="/images/image-removebg-preview.png" alt="logo" />
          <h1>
            <strong>Capital</strong>Sphere
          </h1>
        </nav>

        <div className={styles["main-content"]}>
          <div className={styles["left-section"]}>
            <h1>Hello Again!</h1>
            <p>
              To keep connected with us, please login for the best experience
            </p>
          </div>

          <div className={styles["signUp-section"]}>
            <div className={styles["authenticate-head"]}>
              <img src="/images/user.svg" alt="user icon" />
              <h1>Login Details</h1>
            </div>

            <div className={styles.authentication}>
              <div className={styles.inputAuth}>
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  placeholder="abc@email.com"
                  name="email"
                  required
                />
              </div>

              <div className={styles.inputAuth}>
                <label htmlFor="pass">Password</label>
                <input
                  type="password"
                  name="pass"
                  placeholder="password"
                  required
                />
              </div>

              <p className={styles.forgotPaas}>Forgot Password?</p>
            </div>

            <div className={styles.submitBtn}>
              <input type="button" value="Login" onClick={handleHomeClick}/>
              <Link to="/">
                <p>
                  Don't have an account? <span>SignUp </span>
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
