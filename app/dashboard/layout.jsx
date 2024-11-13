// components/DashboardLayout.js
import Link from "next/link";
import LogoutButton from "../commonComponents/button/logout";
const DashboardLayout = ({ children }) => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
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

      {/* Main Content */}
      <main className="flex-1">
        {/* Header */}
        <header className="flex justify-between items-center p-4 bg-white shadow">
          <h1 className="text-xl">Welcome</h1>
          <div className="flex gap-4">
            <button className="py-2 px-4 bg-blue-500 text-white rounded">Button 1</button>
            <button className="py-2 px-4 bg-blue-500 text-white rounded">Button 2</button>
            <button className="py-2 px-4 bg-blue-500 text-white rounded">Button 3</button>
          </div>
        </header>

        {/* Dynamic content */}
        <section className="p-4">{children}</section>
      </main>
    </div>
  );
};

export default DashboardLayout;
