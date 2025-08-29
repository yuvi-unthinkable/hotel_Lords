import React, { useState } from "react";
import styles from "./LoginSignup.module.css";
import { useNavigate } from "react-router";
import { Link } from "react-router";
import axios from "axios";
import { useToast } from "../../hooks/toaster";

export default function Login() {
  const { showToast } = useToast();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const [MessageChannel, setMessage] = useState("");
  const [token, setToken] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    try {
      const response = await axios.post(
        "https://chai-and-backend.onrender.com/api/v1/users/login",
        formData,
        {
          withCredentials: true,
        }
      );
      console.log("🚀 ~ handleSubmit ~ response:", response.data);
      if (response.data.sucess) {
        const user = response.data;
        setMessage(response.data.message);
        setToken(response.data.acessToken);
        localStorage.setItem("refreshToken", response.data.refreshToken);
        localStorage.setItem("authToken", response.data.acessToken);
        showToast("Logged in sucessfully", "success");
        navigate("/homepage");
      } else {
        setMessage("Login failed");
      }
    } catch (error) {
      showToast("Invalid Credentials", "error");
      console.log("Error :", error);
      setMessage("something went wrong");
    }
  };

  return (
    <div className={styles.loginsignup}>
      <div className={styles.container}>
        <nav>
          <img
            src="https://assets.simplotel.com/simplotel/image/upload/x_0,y_0,w_1315,h_990,r_0,c_crop,q_80,dpr_1,f_auto,fl_progressive/w_355,h_200,f_auto,c_fit/lords-hotels-resorts-(be-only)/lords_logo_wa"
            alt="logo"
            style={{ width: "70px" }}
          />
          {/* <h1>
            <strong>Hotel </strong>Lords
          </h1> */}
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
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.inputAuth}>
                <label htmlFor="pass">Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  onChange={handleChange}
                  required
                />
              </div>

              <p className={styles.forgotPaas}>Forgot Password?</p>
            </div>

            <div className={styles.submitBtn}>
              <input
                type="button"
                value="Login"
                onClick={handleSubmit}
                formMethod="post"
              />
              <Link to="/">
                <p className={styles.switchBack}>
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
