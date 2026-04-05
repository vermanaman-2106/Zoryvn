import { useState } from "react";
import API from "../services/Api";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      await API.post("/auth/register", {
        name,
        email,
        password
      });

      alert("Signup successful!");
      navigate("/"); // go to login
    } catch (err) {
      alert("Signup failed");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="p-6 shadow rounded w-80">
        <h2 className="text-xl mb-4">Sign Up</h2>

        <input
          className="border p-2 w-full mb-3"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="border p-2 w-full mb-3"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="border p-2 w-full mb-3"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleSignup}
          className="bg-green-500 text-white w-full p-2 rounded"
        >
          Sign Up
        </button>
        <p className="mt-3 text-sm text-center">
  Already have an account?{" "}
  <span
    className="text-blue-400 cursor-pointer hover:underline"
    onClick={() => navigate("/")}
  >
    Login
  </span>
</p>
      </div>
    </div>
  );
}