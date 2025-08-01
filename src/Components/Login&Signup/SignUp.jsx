import React from "react";
import styles from "./LoginSignup.module.css";
import { useNavigate } from "react-router";
import { Link } from "react-router";

export default function SignUp() {

  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("homepage");
  };
  return (
    <div className={styles.loginsignup}>
      <div className={styles.container}>
        <nav>
          <img src="/images/image-removebg-preview.png" alt="logo" />
          <h1>
            <strong>Capital</strong>Sphere
          </h1>
        </nav>

        <div className={styles["main-content"]}>
          <div className={styles["left-section"]}>
            <h1>Hello NewComer!</h1>
            <p>For the best experience, Kindly Register.</p>
          </div>

          <div className={styles["signUp-section"]}>
            <div className={styles["authenticate-head"]}>
              <img src="/images/user.svg" alt="user icon" />
              <h1>Registration Details</h1>
            </div>

            <div className={styles.authentication}>
              <div className={styles.inputAuth}>
                <label htmlFor="fullName">Full Name</label>
                <input
                  type="text"
                  placeholder="Munna Tripathi"
                  name="fullName"
                  required
                />
              </div>

              <div className={styles.inputAuth}>
                <label htmlFor="gender">Gender</label>
                <select name="gender" required>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>

              <div className={styles.inputAuth}>
                <label htmlFor="dob">Date of Birth</label>
                <input
                  type="date"
                  placeholder="01/01/2001"
                  name="dob"
                  required
                />
              </div>

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
                <label htmlFor="phone">Phone Number</label>
                <input type="number" placeholder="1234567890" name="phone" />
              </div>

              <div className={styles.inputAuth}>
                <label htmlFor="pass">Password</label>
                <input
                  type="password"
                  name="pass"
                  placeholder="Abc@1234"
                  pattern="(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                  title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                  required
                />
              </div>
            </div>

            <div className={styles.submitBtn}>
              <input type="button" value="Sign Up" onClick={handleHomeClick}/>
              <Link to="/login">
                <p>
                  Already have an account? <span>Signin</span>
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
