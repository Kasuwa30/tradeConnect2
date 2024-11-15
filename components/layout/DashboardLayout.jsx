// components/DashboardLayout.js
import Header from "../../app/dashboard/_components/header";
import SideBar from "../../app/dashboard/_components/sideBar";
const DashboardLayout = ({ children }) => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <SideBar />
      {/* Main Content */}
      <main className="flex-1">
        {/* Header */}
        <Header />
        {/* Dynamic content */}
        <section className="p-4">{children}</section>
      </main>
    </div>
  );
};

export default DashboardLayout;
