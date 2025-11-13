import React, { useMemo, useState } from "react";
import { Button, Table, Tooltip, Avatar, Tag } from "antd";

import expandIcon from "../assets/expandIcon.png";

import "./TaskSection.css";

type TaskState = "ongoing" | "paused" | "notStarted" | "historical";

interface TaskSectionProps {
  tasks: Task;
}
export interface Member {
  id: number;
  name: string;
  avatar: string;
}
interface HistoryRecord {
  key: string;
  title: string;
  time: string;
  address: string;
  name: string;
}

export interface Task {
  id: string;
  title: string;
  tag: string[];
  status: string;
  startTime: string;
  endTime: string;
  project: string;
  creator: Member[];
  assistant: Member[];
  listdata?: HistoryRecord[];
}

export interface Task {
  id: string;
  title: string;
  tag: string[];
  status: string;
  startTime: string;
  endTime: string;
  project: string;
  creator: Member[];
  assistant: Member[];
  listdata?: HistoryRecord[];
}
const columns = [
  {
    title: "title",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "time",
    dataIndex: "time",
    key: "time",
  },
  {
    title: "address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "name",
    dataIndex: "name",
    key: "name",
  },
];

function renderButtons(status: TaskState) {
  switch (status) {
    case "ongoing":
      return (
        <>
          <Button onClick={() => alert("进入直播")}>进入直播</Button>
        </>
      );
    case "paused":
      return (
        <>
          <Button onClick={() => alert("继续直播")}>继续直播</Button>
        </>
      );
    case "notStarted":
      return (
        <>
          <Button onClick={() => alert("开始直播")}>开始直播</Button>
        </>
      );
    case "historical":
      return <></>;
    default:
      return null;
  }
}
const TaskSection: React.FC<TaskSectionProps> = ({ tasks }) => {
  const {
    status = "ongoing" as TaskState,
    tag,
    startTime,
    endTime,
    project,
    creator,
    assistant,
    listdata = [],
    title,
  } = tasks;
  const [isExpand, setIsExpand] = useState(false);
  const renderButton = useMemo(() => {
    return renderButtons(status as TaskState);
  }, [status]);
  const afterStyle = status;
  const showisExpand = listdata?.length > 0;
  return (
    <div className="tsaskSection">
      <div className={`tsaskSectionContent ${afterStyle}`}>
        <div className="taskSectionMian">
          {showisExpand && (
            <div className="expandBox" onClick={() => setIsExpand(!isExpand)}>
              <img src={expandIcon} alt="" />
            </div>
          )}

          <div className="info">
            <div className="tags">
              {tag.map((t, index) => (
                <Tag color="blue" key={index}>
                  {t}
                </Tag>
              ))}
            </div>
            <div className="npg">
              <p>{title}</p>
              <p>{">>"}</p>
              <p>product</p>
            </div>
            <div className="users">
              <div className="creator">
                <p className="label">创建者</p>
                {assistant.map((m) => (
                  <Tooltip title={m.name} key={m.id}>
                    <Avatar size="small" src={m.avatar} />
                  </Tooltip>
                ))}
              </div>

              <div className="assistant">
                <p className="label">协助者</p>
                {creator.map((m) => (
                  <Tooltip title={m.name} key={m.id}>
                    <Avatar size="small" src={m.avatar} />
                  </Tooltip>
                ))}
              </div>
            </div>
          </div>

          <div className="MeetingInfo">
            <div className="time">
              <p>{startTime} </p>
              <p>|</p>
              <p>{endTime}</p>
            </div>
            <div className="venue">
              <p>{project}</p>
            </div>
          </div>
          <div className="actions">
            {renderButton}
            <Button className="action-more" onClick={() => alert("点击更多")}>
              更多
            </Button>
          </div>
        </div>
        {showisExpand && (
          <div
            className={`TaskSectionTable ${isExpand ? "expand" : "collapse"}`}
          >
            <Table
              columns={columns}
              dataSource={listdata}
              showHeader={false}
              pagination={false}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskSection;
