// app/login/page.js
"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import React from "react";
import nookies from "nookies"; // Setting cookies here

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    if (username === "user" && password === "pass") {
      console.log({ username, password });
      // Set the auth cookie for one day
      nookies.set(null, "auth", "true", {
        maxAge: 24 * 60 * 60,
        path: "/",
      });
      //localStorage.setItem("auth", "true");
      router.push("/dashboard");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={e => setUsername(e.target.value)}
        style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
      />
      <button onClick={handleLogin} style={{ width: "100%", padding: "8px" }}>
        Login
      </button>
    </div>
  );
}
