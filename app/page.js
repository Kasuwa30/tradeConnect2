import LandingPageLayout from "../components/layout/LandingPageLayout";
import AuthLayout from "../components/layout/AuthLayout";
import DashboardLayout from "../components/layout/DashboardLayout";
export default function Page() {
  return (
    <div>
      <LandingPageLayout />
      <AuthLayout />
      <DashboardLayout />
    </div>
  );
}
