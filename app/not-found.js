// app/not-found.js
import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div style={{ textAlign: "center", marginTop: "20vh" }}>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you're looking for doesn't exist.</p>
      <Link href="/" style={{ color: "#0070f3", textDecoration: "underline" }}>
        Go back to Home
      </Link>
    </div>
  );
}
