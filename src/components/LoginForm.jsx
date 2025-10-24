import { useState } from "react";

export default function LoginForm({ onLogin }) {

  //State Declaration
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {  //e.preventDefault() stops the browser from doing a page reload when the form submits.
    e.preventDefault();                //stops default behaviour-page reload
    setError("");
    setSuccess("");
  
    if (!username) return setError("Username is required"); //Frontend side
    if (!password) return setError("Password is required");


    setLoading(true); //Indicates that the app is waiting for the API to respond
                      //Later used to disable the button and show “Logging in...” text.

    try {
      // Call dummyjson API
      //Making HTTPS requests 
      const response = await fetch("https://dummyjson.com/auth/login", { 
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: username,
          password: password,
        }), //Converts the JS object into  JSON string to be be sent as request payload
      });

      const data = await response.json();   //converts the API response from JSON into Javascript object

      if (response.ok) {                    //Checks if HTTPS status is 200-299
        setSuccess("Login successful!");
        onLogin?.(data);                    //Show success msg, optional callback to parent
      } else {
        setError(data.message || "Invalid credentials");
      }
    } catch (err) {
      setError("Something went wrong. Try again!"); //When fetch request fails while retriving data
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 p-6 bg-white border border-gray-300 rounded-lg shadow-md"
    >
      <label>
        Username:
        <input
          aria-label="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="p-0.5 shadow-md  border border-gray-200 "
        />
      </label>

      <label>
        Password:
        <input
          aria-label="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-0.5 shadow-md  border border-gray-200"
        />
      </label>

      {error && <span className="text-red-500">{error}</span>}
      {success && <span className="text-green-500">{success}</span>}
      

      <button type="submit" disabled={loading} className="text-black px-3 py-1 rounded bg-blue-100">
        {loading ? "Logging in..." : "Login"}
      </button>
    </form>
  );
}
