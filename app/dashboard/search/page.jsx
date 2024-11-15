import DashboardLayout from "../../../components/layout/DashboardLayout";
import Image from "next/image";

function Page() {
  return (
    <DashboardLayout>
      <div>
        <Image src="/images/dashboard-metric.svg" width={1100} height={1100} />
        <div>
          <Image src="/images/finanical-overview.svg" width={1100} height={1100} />
        </div>
        <div>
          <Image src="/images/events.svg" width={1100} height={1100} />
        </div>
        <div className="py-3">
          <Image src="/images/event-details.svg" width={1050} height={1100} />
        </div>
        <div className="py-3">
          <Image src="/images/checklist.svg" width={1100} height={1100} />
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Page;
