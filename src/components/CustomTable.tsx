import React from "react";
import { Table } from "antd";
import dayjs from "dayjs";
import timeIcon from "../assets/timeIcon.svg";
import deleteIcon from "../assets/deleteIcon.svg";
import moreIcon from "../assets/moreIcon.svg";
import "./CustomTable.css";

export const columns = [
  {
    title: "title",
    dataIndex: "title",
    key: "title",
    width: 144,
    render: (text: string) => <a>{text}</a>,
  },
  {
    title: "time",
    dataIndex: "time",
    key: "time",
    width: 418,
    render: (_: string, record: HistoryRecord) => {
      const { startTime, endTime } = record;
      const fmt = "YYYY-MM-DD HH:mm:ss";
      const handleStartTime = dayjs(Number(startTime)).format(fmt);
      const handleEndTime = dayjs(Number(endTime)).format(fmt);
      return (
        <div className="time-box">
          <p>时间：</p>
          <img src={timeIcon} alt="" />
          <p>{handleStartTime}</p>
          <img src={timeIcon} alt="" />
          <p>{handleEndTime}</p>
        </div>
      );
    },
  },
  {
    title: "address",
    dataIndex: "address",
    key: "address",
    width: 268,
  },
  {
    title: "name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "action",
    dataIndex: "action",
    key: "action",
    render: (_: string, record: HistoryRecord) => {
      return (
        <div className="actions">
          <img
            src={moreIcon}
            onClick={() => {
              alert("点击更多");
            }}
          />
          <img
            src={deleteIcon}
            onClick={() => {
              alert("点击删除");
            }}
          />
        </div>
      );
    },
  },
];

export interface HistoryRecord {
  key: string;
  title: string;
  time: string;
  startTime: string;
  endTime: string;
  address: string;
  name: string;
}
interface CustomTableProps {
  historyRecord: HistoryRecord[];
}

const CustomTable: React.FC<CustomTableProps> = ({ historyRecord }) => {
  return (
    <Table
      rowClassName={() => "custom-row"}
      columns={columns}
      dataSource={historyRecord}
      showHeader={false}
      pagination={false}
    />
  );
};

export default CustomTable;
