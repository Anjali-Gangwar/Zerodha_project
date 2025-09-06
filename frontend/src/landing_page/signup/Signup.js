import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../api/axios";
import './Form.css';

function Signup() {
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/signup", formData);
      setMessage(res.data.msg);

      // signup successful → navigate to login
      navigate("/login");
    } catch (error) {
      if (error.response) {
      // Backend se aaya error
      alert(error.response.data.message || "Signup failed. Try again.");
    } else {
      // Server/Network issue
      alert("Network error. Please check your connection.");
    }
      // setMessage(err.response?.data?.msg || "Error");
    }
  };

  return (
    <div className="form-wrapper">
      <div className="form-container">
        <h2>Signup</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
          />
          <button type="submit">Signup</button>
        </form>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default Signup;
