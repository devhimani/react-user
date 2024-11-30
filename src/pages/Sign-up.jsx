import { Link } from "react-router-dom";
import "./Sign-up.css";
import { useState } from "react";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setError("");

    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignUp = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
      setError("All fields are required");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    // db logic

    console.log(formData);
  };

  return (
    <div className="signup_container">
      <h1>Sign-up</h1>
      <form onSubmit={handleSignUp} className="signup_form">
        <input type="text" placeholder="name" name="name" value={formData.name} onChange={handleChange} />
        <input type="email" placeholder="email" name="email" value={formData.email} onChange={handleChange} />
        <input type="password" placeholder="password" name="password" value={formData.password} onChange={handleChange} />
        <input
          type="password"
          placeholder="confirm password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
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
