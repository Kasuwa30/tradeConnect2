"use client";
import nookies from "nookies";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = () => {
    nookies.destroy(null, "auth", { path: "/" });
    router.push("/home");
  };

  return (
    <button onClick={handleLogout} style={{ width: "100%", padding: "8px" }}>
      Logout
    </button>
  );
}
