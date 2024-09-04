import React from "react";
import { Chart } from "./Chart";
import { AllProjects } from "./AllProjects";
import dummyData, { DataProp } from "@/dummy-data";

export const Dashboard = () => {  

  return (
    <div>
      <Chart />

      <ul className="grid grid-cols-9 py-6">
        <li className="col-span-3">Name</li>
        <li>Price</li>
        <li>TMV</li>
        <li>GDP</li>
        <li>Dept</li>
        <li>Listings/mon</li>
        <li>Balance</li>
      </ul>
      {dummyData.map((data: DataProp) => {
        return <AllProjects key={data.id} data={data} />;
      })}
    </div>
  );
};
