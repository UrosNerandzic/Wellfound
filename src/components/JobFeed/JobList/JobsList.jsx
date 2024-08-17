import DataAnalyticsJobs from "./DataAnalyticsJobs";
import DesignJobs from "./DesignJobs";
import EngineeringJobs from "./EngineeringJobs";
import FinanceJobs from "./Finance";
import MarketingJobs from "./MarketingJobs";
import OperationsJobs from "./OperationsJobs";
import ProductsJobs from "./ProductJobs";
import RecruitingJobs from "./RecruitingJobs";
import SalesJobs from "./SalesJobs";
import TrendingStartup from "./TrendingStartup";

async function JobsList() {
  return (
    <div className="flex-grow">
      <div className="-mt-4 font-sans">
        <TrendingStartup />
        <EngineeringJobs />
        <ProductsJobs />
        <DesignJobs />
        <DataAnalyticsJobs />
        <SalesJobs />
        <MarketingJobs />
        <OperationsJobs />
        <RecruitingJobs />
        <FinanceJobs />
      </div>
    </div>
  );
}

export default JobsList;
