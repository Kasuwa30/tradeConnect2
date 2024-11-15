import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <div style={{ width: "300px", padding: "20px", border: "1px solid #ccc", borderRadius: "8px" }}>{children}</div>
    </div>
  );
};

export default AuthLayout;
