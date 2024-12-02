import { Link } from "react-router-dom";
import "./Sign-in.css";
<<<<<<< HEAD
import { useState } from "react";
=======

>>>>>>> auth
const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleSignin = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      setError("All fields are required");
      return;
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError("");
  };

  return (
    <div className="signin_container">
      <h1> Sign-in </h1>
<<<<<<< HEAD
      <form onSubmit={handleSignin} className="signin_form">
        <input
          type="text"
          placeholder="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <button type="submit">Sign In</button>
      </form>
      {error && <p className="error"> {error} </p>}
      <p>
        Do not have an acoount? <Link to={"/sign-up"}> Sign Up</Link>
=======
      <form className="signin_form">
        <input type="text" placeholder="email" />
        <input type="text" placeholder="password" />
        <button type="submit">Sign In</button>
      </form>
      <p>
        Don't have an account? <Link to={"/sign-up"}>Sign Up</Link>
>>>>>>> auth
      </p>
    </div>
  );
};

export default SignIn;
