import { Link } from "react-router-dom";
import "./Sign-up.css";
import { useState } from "react";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const [error, setError] = useState("");

  const handlechange = (e) => {
    setError("");

    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignUp = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.password || !formData.confirmpassword) {
      setError("All fileds are required");
      return;
    }

    if (formData.password !== formData.confirmpassword) {
      setError("Password didn't match");
    }
  };

  return (
    <div className="signup_container">
      <h1>Sign-up</h1>
      <form onSubmit={handleSignUp} className="signup_form">
        <input type="text" placeholder="name" name="name" value={formData.name} onChange={handlechange} />
        <input type="text" placeholder="email" name="email" value={formData.email} onChange={handlechange} />
        <input type="text" placeholder="password" name="password" value={formData.password} onChange={handlechange} />
        <input
          type="text"
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
