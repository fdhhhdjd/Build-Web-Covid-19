import React, { useState } from "react";
import { Table, Space, Input, Pagination } from "antd";
const Tables = ({
  totalStateWiseCount,
  totalStateArrayLength,
  loading,
  loadData,
}) => {
  const [sortedInfo, setSortedInfo] = useState({});
  const handleChange = (_, filters, sorter) => {
    const { order, field } = sorter;
    setSortedInfo({ columnKey: field, order });
  };
  const column = [
    {
      title: "State/UT",
      dataIndex: "state",
      sorter: (a, b) => a.state.length - b.state.length,
      sortOrder: sortedInfo.columnKey === "state" && sortedInfo.order,
      width: 120,
    },
    {
      title: "Confirmed",
      dataIndex: "confirmed",
      sorter: (a, b) => a.confirmed.length - b.confirmed.length,
      sortOrder: sortedInfo.columnKey === "confirmed" && sortedInfo.order,
      width: 120,
    },
    {
      title: "Active",
      dataIndex: "active",
      sorter: (a, b) => a.active.length - b.active.length,
      sortOrder: sortedInfo.columnKey === "active" && sortedInfo.order,
      width: 120,
    },
    {
      title: "Recovered",
      dataIndex: "recovered",
      sorter: (a, b) => a.recovered.length - b.recovered.length,
      sortOrder: sortedInfo.columnKey === "recovered" && sortedInfo.order,
      width: 120,
    },
    {
      title: "Deaths",
      dataIndex: "deaths",
      sorter: (a, b) => a.deaths.length - b.deaths.length,
      sortOrder: sortedInfo.columnKey === "deaths" && sortedInfo.order,
      width: 120,
    },
    {
      title: "Daily Confirmed",
      dataIndex: "deltaconfirmed",
      sorter: (a, b) => a.deltaconfirmed.length - b.deltaconfirmed.length,
      sortOrder: sortedInfo.columnKey === "deltaconfirmed" && sortedInfo.order,
      width: 120,
    },
    {
      title: "Daily Recovered ",
      dataIndex: "deltarecovered",
      sorter: (a, b) => a.deltarecovered.length - b.deltarecovered.length,
      sortOrder: sortedInfo.columnKey === "deltarecovered" && sortedInfo.order,
      width: 120,
    },
    {
      title: "Daily Deaths",
      dataIndex: "deltadeaths",
      sorter: (a, b) => a.deltadeaths.length - b.deltadeaths.length,
      sortOrder: sortedInfo.columnKey === "deltadeaths" && sortedInfo.order,
      width: 120,
    },
  ];
  return (
    <>
      <Table
        columns={column}
        dataSource={totalStateWiseCount}
        pagination={false}
        onChange={handleChange}
      />
    </>
  );
};

export default Tables;
