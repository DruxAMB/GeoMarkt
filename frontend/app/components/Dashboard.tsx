"use client";
import React, { useEffect, useState } from "react";
import { Chart } from "./Chart";
import { AllProjects } from "./AllProjects";
import dummyData, { DataProp } from "@/dummy-data";
import { MyQueryDocument, MyQueryQuery, subscribe } from "../../.graphclient";
import { ExecutionResult } from "graphql";
import { gql, request } from "graphql-request";
import { useQuery } from "@tanstack/react-query";
import { ICityIndexFactoriesData, ICityIndexFactory } from "@/types";
const url =
  "https://api.studio.thegraph.com/query/88691/geomarket/version/latest";
const query = gql`
  {
    cityIndexFactories {
      cityIndexes {
        code
        createdAtBlock
        createdAtTimestamp
        id
        name
        owner
        squareFeet
        symbol
        tokenBuys {
          amount
          blockNumber
          buyer
          id
          timestamp
        }
        tokenSells {
          timestamp
          seller
          id
          blockNumber
          amount
        }
      }
    }
  }
`;

type cityIndexesType = {};
export const Dashboard = () => {
  const [result, setResult] = useState<ExecutionResult<MyQueryQuery> | null>(
    null
  );

  const { data: cityFactoriesData } = useQuery<ICityIndexFactoriesData>({
    queryKey: ["cityIndexFactoriesData"],
    async queryFn() {
      return await request(url, query);
    },
  });

  console.log(cityFactoriesData);

  useEffect(() => {
    let shouldContinue = true;

    const fetchData = async () => {
      try {
        const fetchedResult = await subscribe(MyQueryDocument, {});
        console.log(fetchedResult);

        // if ("data" in fetchedResult) {
        //   if (shouldContinue) {
        //     setResult(fetchedResult);
        //   }
        // } else {
        //   for await (const result of fetchedResult) {
        //     if (!shouldContinue) break;
        //     setResult(result);
        //   }
        // }
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    fetchData();

    return () => {
      shouldContinue = false;
    };
  }, []);

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
      {cityFactoriesData &&
        cityFactoriesData.cityIndexFactories.map(
          (cityIndexs: ICityIndexFactory) => {
            return cityIndexs.cityIndexes.map((cityData, index) => (
              <AllProjects
                key={cityData.id}
                {...dummyData[index]}
                name={cityData.name}
                nameTag={cityData.symbol}
              />
            ));
          }
        )}
    </div>
  );
};
