"use client";

import LoadingPage from "@/app/loading";
import BalanceCardsHolder from "@/components/Dashboard/LandingPage/BalanceCardsHolder";
import ProfileCard from "@/components/Dashboard/LandingPage/ProfileCard";
import { useGetMyProfileQuery } from "@/redux/api/userApi";
const UserDashboard = () => {
  const { data, isLoading } = useGetMyProfileQuery(undefined);

  if (isLoading) return <LoadingPage />;
  console.log(data);

  return (
    <div className="min-h-svh p-4 lg:p-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <BalanceCardsHolder balance={73000.34} />
        </div>

        <ProfileCard user={data?.data} />
      </div>

      <div>
        
      </div>
    </div>
  );
};

export default UserDashboard;
