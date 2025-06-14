import React, { useState } from "react";
import axios from "axios";

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');
  
  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      await axios.post('/api/auth/Register', { name, email, password });
      setMsg("Signup successful!");
    } catch (error) {
      setMsg(error.response?.data?.message || "Signup failed.");
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form onSubmit={handleSignup} className="p-4 border rounded shadow-md">
        <h2>Signup</h2>
        <input 
          className="border p-2 mt-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          required
        /><br/>

        <input 
          className="border p-2 mt-2"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        /><br/>

        <input 
          className="border p-2 mt-2"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        /><br/>

        <button className="bg-blue-500 text-gray-50 p-2 mt-2">Signup</button>
        {msg && <p className="msg mt-2">{msg}</p>}
      </form>
    </div>
  )
}

export default Signup;

