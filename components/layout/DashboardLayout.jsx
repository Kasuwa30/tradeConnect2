// components/DashboardLayout.js
import Header from "../../app/dashboard/_components/header";
import SideBar from "../../app/dashboard/_components/sideBar";
const DashboardLayout = ({ children }) => {
  return (
    <div className="flex h-screen w-full bg-white">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-full w-72">
        <SideBar />
      </div>
      {/* Main Content */}
      <main className="ml-72 flex-1 flex flex-col">
        {/* Header */}
        <div className="sticky top-0 w-full z-10">
          <Header />
        </div>
        {/* Dynamic content */}
        <section className="flex-1 overflow-y-auto p-4">{children}</section>
      </main>
    </div>
  );
};

export default DashboardLayout;
