import { BalanceCard } from "@/components/Dashboard/UIElements/BalanceCard";

const UserDashboard = () => {
  return (
    <div className="min-h-svh p-2 lg:p-4">
      <div className="grid grid-cols-2 gap-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <BalanceCard />
          <BalanceCard />
        </div>


        <div>

        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
