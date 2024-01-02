import currencyInfo from "@/constants/currencyInfo";
import { Card } from "@nextui-org/react";
import Marquee from "react-fast-marquee";
const CurrencyCard = () => {
  return (
    <div className="">
      <Marquee className="" speed={30} >
        {currencyInfo.map((currency) => (
          <Card
            key={currency.id}
            className="p-4 flex items-center justify-center "
          >
            <div className="text-5xl ">{currency.flag}</div>

            <p className="text-lg font-bold text-secondary">
              {currency.currencyCode}
            </p>
          </Card>
        ))}
      </Marquee>
    </div>
  );
};

export default CurrencyCard;
