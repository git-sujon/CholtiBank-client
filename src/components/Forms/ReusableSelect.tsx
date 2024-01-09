import { Select, SelectItem } from "@nextui-org/react";
import React from "react";

const ReusableSelect = ({ items }:{ items:any }) => {
  return (
    <Select
      items={items}
      label="Favorite Animal"
      placeholder="Select an animal"
      className="max-w-xs"
    >
      {(source) => <SelectItem key={source.value}>{source.label}</SelectItem>}
    </Select>
  );
};

export default ReusableSelect;
