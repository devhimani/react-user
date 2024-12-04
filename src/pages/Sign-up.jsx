import { Link, useNavigate } from "react-router-dom";
import "./Sign-up.css";
import { useState } from "react";
import { useContext } from "react";
import { authContext } from "../store/authContext";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const [error, setError] = useState("");

  const { users, setUsers } = useContext(authContext);
  const navigate = useNavigate();

  const handlechange = (e) => {
    setError("");

    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignUp = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.password ||
      !formData.confirmpassword
    ) {
      setError("All fileds are required");
      return;
    }

    if (formData.password !== formData.confirmpassword) {
      setError("Password didn't match");
    }

    // checking if user is already exist
    const isUserExist = users.some((user) => user.email === formData.email);
    if (isUserExist) {
      setError("user already exist");
      return;
    }
    setUsers((prev) => [...prev, formData]);
    navigate("/sign-in");
    console.log(isUserExist, formData, users); // to check flow of data in console.
  };

  return (
    <div className="signup_container">
      <h1>Sign-up</h1>
      <form onSubmit={handleSignUp} className="signup_form">
        <input
          type="text"
          placeholder="name"
          name="name"
          value={formData.name}
          onChange={handlechange}
        />
        <input
          type="text"
          placeholder="email"
          name="email"
          value={formData.email}
          onChange={handlechange}
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          value={formData.password}
          onChange={handlechange}
        />
        <input
          type="password"
          placeholder="confirm password"
          name="confirmpassword"
          value={formData.confirmpassword}
          onChange={handlechange}
        />
        <button type="submit">Sign Up</button>
      </form>
      {error && <p className="error">{error}</p>}
      <p>
        Already have an account? <Link to={"/sign-in"}>Sign In</Link>
      </p>
    </div>
  );
};

export default SignUp;
