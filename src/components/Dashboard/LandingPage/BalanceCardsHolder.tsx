import { BalanceCard } from "@/components/Dashboard/UIElements/BalanceCard";
import { CgMonday } from "react-icons/cg";
import { MdCalendarMonth } from "react-icons/md";

import { IoIosTrendingUp } from "react-icons/io";
import { IoIosTrendingDown } from "react-icons/io";
import { GiMoneyStack } from "react-icons/gi";

const BalanceCardsHolder = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <BalanceCard
            count={73000.34}
            title={"Current Balance"}
            icon={
              <GiMoneyStack className="text-4xl text-secondary hover:text-primary dark:text-white " />
            }
            badgeTitle={"Month"}
            badgeVariant={"faded"}
            badgeColor={"success"}
            badgeIcon={<CgMonday size={15} />}
          />
          <BalanceCard
            count={125740}
            title={"Deposit Balance"}
            icon={
              <IoIosTrendingUp className="text-4xl text-secondary hover:text-primary dark:text-white " />
            }
            badgeTitle={"Month"}
            badgeVariant={"faded"}
            badgeColor={"success"}
            badgeIcon={<MdCalendarMonth size={15} />}
          />
          <BalanceCard
            count={23570}
            title={"Withdraw Balance"}
            icon={
              <IoIosTrendingDown className="text-4xl text-secondary hover:text-primary dark:text-white " />
            }
            badgeTitle={"Month"}
            badgeVariant={"faded"}
            badgeColor={"danger"}
            badgeIcon={<MdCalendarMonth size={15} />}
          />
        </div>
    );
};

export default BalanceCardsHolder;