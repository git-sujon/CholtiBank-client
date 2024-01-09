import { Button, Card, CardBody } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

const SourceCard = ({
  href,
  title,
  icon,
}: {
  href: string;
  title: string;
  icon: React.ReactNode;
}) => {
  return (
    <Link
      href={href}
      className="xl:max-w-sm  bg-yellow-50 dark:bg-slate-900 dark:text-white shadow-md  border border-primary hover:border-secondary   transition-transform transform hover:scale-105 p-5  lg:p-10"
    >
      <div>
        <div className="flex  justify-center">
          <div className="">
            {icon}
            <h3 className="mt-2 ">{title}</h3>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SourceCard;
