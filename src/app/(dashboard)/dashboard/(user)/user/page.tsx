import BalanceCardsHolder from "@/components/Dashboard/LandingPage/BalanceCardsHolder";
import ProfileCard from "@/components/Dashboard/LandingPage/ProfileCard";
const UserDashboard = () => {
  return (
    <div className="min-h-svh p-4 lg:p-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <BalanceCardsHolder />

        <ProfileCard />
      </div>
    </div>
  );
};

export default UserDashboard;
