import { Avatar, Card } from "@nextui-org/react";

const ProfileCard = () => {
  return (
    <Card className=" bg-yellow-50 dark:bg-slate-900 dark:text-white shadow-md w-full  border border-primary hover:border-secondary   transition-transform transform hover:scale-105 flex items-center ">
      <div className="mt-8">
        <Avatar src="/user.jpg" className="w-20 h-20 text-large" />
      </div>
    </Card>
  );
};

export default ProfileCard;
