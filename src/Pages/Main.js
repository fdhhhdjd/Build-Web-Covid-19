import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Cart, Table } from "./index";
import Moment from "react-moment";
import "moment/locale/vi";
const Main = () => {
  let today = new Date();
  let date =
    today.getDate() +
    "/" +
    (today.getMonth() + 1) +
    "/" +
    (today.getFullYear() + 1);
  const [totalIndiaCase, setTotalIndiaCase] = useState([]);
  const [loading, setLoading] = useState(false);
  const [Time, setTime] = useState();
  const [totalStateWiseCount, setTotalStateWiseCount] = useState([]);
  const [totalStateArrayLength, setTotalStateArrayLength] = useState("");
  let [fileTered] = useState();
  const loadData = async () => {
    setLoading(true);
    const resp = await axios.get("https://data.covid19india.org/data.json");
    setTotalIndiaCase(resp.data.statewise.slice(0, 1));
    //
    const totalStateCount = resp.data.statewise.slice(1);
    setTotalStateWiseCount(totalStateCount);
    setTotalStateArrayLength(totalStateCount.length);
    setLoading(false);
    console.log("asdasd", totalStateCount);
  };

  useEffect(() => {
    loadData();
  }, []);
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date(Date.now())), 1000);
    return () => clearInterval(timer);
  }, []);
  if (loading) return <h2>...loading</h2>;
  return (
    <>
      <div className="App">
        <span>
          <img
            src="https://img.icons8.com/external-flatart-icons-solid-flatarticons/64/000000/external-covid-19-coronavirus-flatart-icons-solid-flatarticons.png"
            style={{ height: "70px" }}
          />
          <h1>Live Tracker Covid 19 </h1>
        </span>
        <h4>
          <strong>
            <Moment format=" dddd, Do MMMM  YYYY, LT:mm:ss a">{Time}</Moment>
          </strong>
          &nbsp; As of {date} 📅
        </h4>
        <Cart totalIndiaCase={totalIndiaCase} />
        <Table
          totalStateWiseCount={totalStateWiseCount}
          totalStateArrayLength={totalStateArrayLength}
          loading={loading}
          loadData={loadData}
        />
      </div>
    </>
  );
};
export default Main;
