import React, { useState } from "react";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');
  
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('/api/auth/Login', { email, password });
      localStorage.setItem('token', res.data?.token);
      setMsg("Login successful!");
      window.location = "/dashboard";

    } catch (error) {
      setMsg(error.response?.data?.message || "Login failed.");
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form onSubmit={handleLogin} className="p-4 border rounded shadow-md">
        <h2>Login</h2>
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

        <button className="bg-blue-500 text-gray-50 p-2 mt-2">Login</button>
        {msg && <p className="msg mt-2">{msg}</p>}
      </form>
    </div>
  )
}

export default Login;

