// import { useEffect, useState } from "react";
// import React from "react";
import { useWindowSize } from "../../shared/windowSize/windowSize";
import {
  Area,
  BarChart,
  ComposedChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LabelList,
} from "recharts";
import css from "./Rechart.module.css";

const data = [
  {
    name: "Свинина",
    coast: 4000,
  },
  {
    name: "Говядина",
    coast: 3000,
  },
  {
    name: "курица",
    coast: 2000,
  },
  {
    name: "Page D",
    coast: 2780,
  },
  {
    name: "Page E",
    coast: 1890,
  },
  {
    name: "Page F",
    coast: 300,
  },
];

const Rechart = ({ chartData }) => {
  const { width } = useWindowSize();
  return width >= 768 ? (
    <div className={css.box}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} className={css.barChart} minPointSize={5}>
          <Bar dataKey="coast" barSize={38} className={css.bar}>
            <LabelList
              dataKey="coast"
              position="top"
              className={css.labelList}
            />
          </Bar>
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            className={css.x}
          />
          {/* <YAxis
              dataKey={false}
              axisLine={false}
              tickLine={false}
              tickCount={9}
            /> */}

          <CartesianGrid vertical={false} opacity={0.3} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : (
    <div className={css.box}>
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          layout="vertical"
          data={data}
          margin={{
            top: 20,
            right: 50,
            bottom: 20,
            left: 20,
          }}
        >
          <XAxis type="number" axisLine={false} tickLine={false} />
          <YAxis dataKey="name" type="category" scale="band" />
          <Bar dataKey="coast" barSize={15} className={css.bar} label="right">
            <LabelList
              dataKey="coast"
              position="right"
              className={css.labelList}
            />
          </Bar>
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Rechart;
