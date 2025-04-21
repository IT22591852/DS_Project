import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { register } from "../../services/authService";
import useAuth from "../../hooks/useAuth";

const RegisterPage = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false); // <-- Success state
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    setError("");
    try {
      await register(form);
      setSuccess(true); // Show success message
      setTimeout(() => {
        navigate("/login"); // Redirect after 2 seconds
      }, 2000);
    } catch (err) {
      setError("Registration failed");
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: "auto", marginTop: 80 }}>
      <h2>Register Restaurant Admin</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Name"
          value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })}
          required
        /><br />
        <input
          placeholder="Email"
          value={form.email}
          onChange={e => setForm({ ...form, email: e.target.value })}
          required
        /><br />
        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={e => setForm({ ...form, password: e.target.value })}
          required
        /><br />
        <button type="submit">Register</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && (
        <p style={{ color: "green" }}>
          Registration successful! Redirecting to login...
        </p>
      )}
      <p style={{ marginTop: 16 }}>
        Already have an account? <a href="/login">Login here</a>
      </p>
    </div>
  );
};

export default RegisterPage;
