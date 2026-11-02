"use client";

import { useState } from "react";
import Button from "@/components/Button";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!email.includes("@") || password.length < 6) {
      setMessage("error:Enter a valid email and a password of 6+ characters.");
      return;
    }
    setMessage(`success:Welcome! Logged in as ${email} (demo only)`);
  }

  const [type, text] = message ? message.split(":") : ["", ""];

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1>Login</h1>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <Button type="submit">Login</Button>
      {text && <p className={type === "error" ? "msg-error" : "msg-success"}>{text}</p>}
    </form>
  );
}