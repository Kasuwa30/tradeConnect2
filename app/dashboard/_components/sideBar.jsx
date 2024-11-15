import Link from "next/link";
import LogoutButton from "../../../app/commonComponents/button/logout";
const SideBar = () => {
  return (
    <aside className="w-64 bg-blue-800 text-white flex flex-col">
      <h2 className="text-xl font-bold p-4">Dashboard</h2>
      <nav className="flex flex-col p-4">
        <Link href="/dashboard/home">Home</Link>
        <Link href="/dashboard/settings">Settings</Link>
        <Link href="/dashboard/profile">Profile</Link>
      </nav>
      <div className="p-4">
        <LogoutButton />
      </div>
    </aside>
  );
};

export default SideBar;
