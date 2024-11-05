import React from "react";

type Props = {
  heroStatistics: Array<{ title: string; count: string }>;
};

function StatisticHeroBar({ heroStatistics }: Props) {
  return (
    <div>
      {" "}
      <div className="p-3 gap-4 flex items-center justify-between lg:justify-around">
        {heroStatistics.map((statistic, index) => (
          <div key={index}>
            <h3 className="font-bold text-2xl">{statistic.count} </h3>
            <p className="text-xl">{statistic.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StatisticHeroBar;
