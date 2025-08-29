import React, { useState } from "react";
import styles from "./LoginSignup.module.css";
import { useNavigate } from "react-router";
import { Link } from "react-router";
import axios from "axios";
import { useToast } from "../../hooks/toaster";

export default function SignUp() {
  const navigate = useNavigate();

  const { showToast } = useToast();

  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    try {
      const file = new FormData();
      console.log("🚀 ~ handleSubmit ~ selectedFile:", formData);

      const response = await axios.post(
        "https://chai-and-backend.onrender.com/api/v1/users/register",
        formData
      );
      setMessage("check you mail for the verification link");
      console.log(message);
      navigate("/VerifyEmail");

      console.log("🚀 ~ handleSubmit ~ response:", response);
      if (response.data.success) {
        setMessage(response.data.message);
        showToast("Registered Sucesssfully", "sucess");

        // if (!user.isVerified) throw new ApiError(401, "Please verify your email");
      } else {
        setMessage("signup failed");
      }
    } catch (error) {
      showToast("Registration Failed", "error");
      console.log("Error :", error);
      setMessage("something went wrong");
    }
  };

  // const handleHomeClick = () => {
  //   navigate("homepage");
  // };
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
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.inputAuth}>
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  placeholder="Munna"
                  name="username"
                  onChange={handleChange}
                  required
                />
              </div>

              {/* <div className={styles.inputAuth}>
                <label htmlFor="gender">Gender</label>
                <select name="gender" required>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div> */}

              {/* <div className={styles.inputAuth}>
                <label htmlFor="dob">Date of Birth</label>
                <input
                  type="date"
                  placeholder="01/01/2001"
                  name="dob"
                  required
                />
              </div> */}

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

              {/* <div className={styles.inputAuth}>
                <label htmlFor="avatar">Upload Avatar</label>
                <input
                  type="file"
                  placeholder="image"
                  name="avatar"
                  onChange={(e)=> setSelectedFile(e.target.files[0])}
                />
              </div>
              <div className={styles.inputAuth}>
                <label htmlFor="coverImage">Upload Cover Image</label>
                <input
                  type="file"
                  placeholder="image"
                  name="coverImage"
                  onChange={(e)=> setSelectedFile(e.target.files[0])}
                />
              </div> */}

              <div className={styles.inputAuth}>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Abc@1234"
                  pattern="(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                  title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className={styles.submitBtn}>
              <input
                type="button"
                value="Sign Up"
                onClick={handleSubmit}
                formMethod="post"
              />
              <Link to="/login" className={styles.switchBack}>
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
