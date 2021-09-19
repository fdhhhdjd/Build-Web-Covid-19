import React, { useState } from "react";
import { Table, Space, Input, Pagination, Button } from "antd";
const Tables = ({
  totalStateWiseCount,
  totalStateArrayLength,
  loading,
  loadData,
  fileTered,
  stateSearch,
}) => {
  const [sortedInfo, setSortedInfo] = useState({});

  const [page, setPage] = useState(1);
  const [postPage, setPostPage] = useState(10);

  const [searchText, setSearchText] = useState("");
  //!sort
  const handleChange = (_, filters, sorter) => {
    const { order, field } = sorter;
    setSortedInfo({ columnKey: field, order });
  };
  //! page
  const indexOfLastPage = page + postPage;
  const indexOfFirstPage = indexOfLastPage - postPage;
  const currentStateCovidCount = totalStateWiseCount.slice(
    indexOfFirstPage,
    indexOfLastPage
  );
  const onShowSizeChange = (current, pageSize) => {
    setPostPage(pageSize);
  };
  const itemRender = (current, type, originalElement) => {
    if (type === "prev") {
      return <a className="text-primary">Previous</a>;
    }
    if (type === "next") {
      return <a className="text-info">Next</a>;
    }
    return originalElement;
  };
  //!searchText
  const handleSearch = (e) => {
    setSearchText(e.target.value);
    if (e.target.value === "") {
      loadData();
    }
  };

  const clearAll = () => {
    setSortedInfo({});
    setSearchText("");
    loadData();
  };
  const refreshAll = () => {
    window.location.reload();
  };

  const column = [
    {
      title: "State/UT",
      dataIndex: "state",
      //!sort
      sorter: (a, b) => a.state.length - b.state.length,
      sortOrder: sortedInfo.columnKey === "state" && sortedInfo.order,
      width: 120,
    },
    {
      title: "Confirmed",
      dataIndex: "confirmed",
      //!sort
      sorter: (a, b) => a.confirmed.length - b.confirmed.length,
      sortOrder: sortedInfo.columnKey === "confirmed" && sortedInfo.order,
      width: 120,
    },
    {
      title: "Active",
      dataIndex: "active",
      //!sort
      sorter: (a, b) => a.active.length - b.active.length,
      sortOrder: sortedInfo.columnKey === "active" && sortedInfo.order,
      width: 120,
    },
    {
      title: "Recovered",
      dataIndex: "recovered",
      //!sort
      sorter: (a, b) => a.recovered.length - b.recovered.length,
      sortOrder: sortedInfo.columnKey === "recovered" && sortedInfo.order,
      width: 120,
    },
    {
      title: "Deaths",
      dataIndex: "deaths",
      //!sort
      sorter: (a, b) => a.deaths.length - b.deaths.length,
      sortOrder: sortedInfo.columnKey === "deaths" && sortedInfo.order,
      width: 120,
    },
    {
      title: "Daily Confirmed",
      dataIndex: "deltaconfirmed",
      //!sort
      sorter: (a, b) => a.deltaconfirmed.length - b.deltaconfirmed.length,
      sortOrder: sortedInfo.columnKey === "deltaconfirmed" && sortedInfo.order,
      width: 120,
    },
    {
      title: "Daily Recovered ",
      dataIndex: "deltarecovered",
      //!sort
      sorter: (a, b) => a.deltarecovered.length - b.deltarecovered.length,
      sortOrder: sortedInfo.columnKey === "deltarecovered" && sortedInfo.order,
      width: 120,
    },
    {
      title: "Daily Deaths",
      dataIndex: "deltadeaths",
      //!sort
      sorter: (a, b) => a.deltadeaths.length - b.deltadeaths.length,
      sortOrder: sortedInfo.columnKey === "deltadeaths" && sortedInfo.order,
      width: 120,
    },
  ];
  return (
    <>
      <Space style={{ marginBottom: 16, marginTop: 10 }}>
        <Input
          placeholder="Search your state"
          onChange={handleSearch}
          type="text"
          style={{ height: "35px" }}
          allowClear
          value={searchText}
        />
        <Button
          onClick={() => stateSearch(searchText)}
          className="btn btn-raised btn-success"
          style={{ marginTop: 4 }}
        >
          Search
        </Button>
        <Button
          onClick={clearAll}
          className="btn btn-raised btn-info"
          style={{ marginTop: 4 }}
        >
          Clear
        </Button>
        <Button
          onClick={refreshAll}
          className="btn btn-raised btn-warning"
          style={{ marginTop: 4 }}
        >
          Refresh
        </Button>
      </Space>
      <Table
        columns={column}
        dataSource={totalStateWiseCount}
        // dataSource={
        //   currentStateCovidCount.length !== 0
        //     ? currentStateCovidCount
        //     : totalStateWiseCount
        // }
        dataSource={
          fileTered && fileTered.length
            ? fileTered
            : currentStateCovidCount.length !== 0
            ? currentStateCovidCount
            : totalStateWiseCount
        }
        pagination={false}
        loading={loading}
        bordered
        onChange={handleChange}
      />
      <Space margin={{ marginBottom: 16, marginTop: 10 }}>
        <Pagination
          onChange={(value) => setPage(value)}
          pageSize={postPage}
          total={totalStateArrayLength}
          current={page}
          showSizeChanger
          showQuickJumper
          onShowSizeChange={onShowSizeChange}
          itemRender={itemRender}
        />
      </Space>
    </>
  );
};

export default Tables;
