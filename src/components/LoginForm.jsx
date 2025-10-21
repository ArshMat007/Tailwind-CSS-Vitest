import React, { useState } from "react";

export default function LoginForm({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("")

  const handleSubmit = (e) => {
  e.preventDefault();
  setError(""); // Clear previous errors
  setSuccess(""); // Clear previous success
  if (!username) return setError("Username is required");
  if (!password) return setError("Password is required");
  if (username === "admin" && password === "1234") {
    setSuccess("Valid credentials"); // Set success message
    //onLogin(); // Call the login handler
  } else {
    setError("Invalid credentials");
  }
};


  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-6 bg-white border border-fray-300 rounded-lg shadow-md ">
      <label>
        Username:
        <input
          aria-label="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <label>
        Password:
        <input
          aria-label="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      {error && <span className="text-red-500">{error}</span>}
      {success && <span className="text-green-500">{success}</span>}
      <button type="submit">Login</button>
    </form>
  );
}
