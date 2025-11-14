import React, { useMemo, useState } from "react";
import { Button } from "antd";
import GameTag from "./GameTag";
import CustomTable, { type HistoryRecord } from "./CustomTable";
import AvatarGroupLegacy, { type User } from "./AvatarGroupLegacy";
import TimeRangeCard from "./TimeRangeCard";
import doubleleft from "../assets/doubleleft.svg";
import IconMore from "../assets/iconMore.svg";

import "./TaskSection.css";

type SymposiumState = "ongoing" | "paused" | "notStarted" | "historical";

interface GameTag {
  type: "timi" | "tencent";
  name: string;
}
export interface SymposiumData {
  id: string;
  title: string;
  tag: GameTag[];
  status: SymposiumState;
  startTime: string;
  endTime: string;
  project: string;
  creator: User[];
  assistant: User[];
  listdata?: HistoryRecord[];
}
interface TaskSectionProps {
  tasks: SymposiumData;
}

function renderButtons(status: SymposiumState) {
  switch (status) {
    case "ongoing":
      return (
        <>
          <Button className={`btn ongoing`} onClick={() => alert("进入直播")}>
            进入直播
          </Button>
        </>
      );
    case "paused":
      return (
        <>
          <Button className={`btn paused`} onClick={() => alert("继续直播")}>
            继续直播
          </Button>
        </>
      );
    case "notStarted":
      return (
        <>
          <Button
            className={`btn notStarted`}
            onClick={() => alert("开始直播")}
          >
            开始直播
          </Button>
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
    status = "ongoing" as SymposiumState,
    tag,
    startTime,
    endTime,
    project,
    creator,
    listdata = [],
    title,
  } = tasks;
  const [isExpand, setIsExpand] = useState(false);
  const renderButton = useMemo(() => {
    return renderButtons(status as SymposiumState);
  }, [status]);
  const afterStyle = status;
  const showisExpand = listdata?.length > 0;

  return (
    <div className="tsaskSection">
      <div className={`tsaskSection-content ${afterStyle}`}>
        <div className="taskSection-mian">
          {showisExpand && (
            <div className="expand-box" onClick={() => setIsExpand(!isExpand)}>
              <div className={`triangle ${isExpand ? "open" : ""}`}></div>
            </div>
          )}

          <div className={`info ${!showisExpand ? "pad12" : ""}`}>
            <div className="tags">
              {tag.map((t) => (
                <GameTag type={t.type} key={t.type} dot={t.type === "tencent"}>
                  {t.name}
                </GameTag>
              ))}
            </div>
            <div className="npg">
              <p>{title}</p>
              <img src={doubleleft} alt="" />
              <p>product</p>
            </div>
            <div className="users">
              <AvatarGroupLegacy
                label="创建者"
                data={creator}
                size="small"
                maxCount={4}
                maxStyle={{
                  color: "#00000096",
                  backgroundColor: "#DDDDDD",
                  cursor: "pointer",
                }}
                maxPopoverTrigger="click"
              />
              <AvatarGroupLegacy
                label="协助者"
                data={creator}
                size="small"
                maxCount={4}
                maxStyle={{
                  color: "#00000096",
                  backgroundColor: "#DDDDDD",
                  cursor: "pointer",
                }}
                maxPopoverTrigger="click"
              />
            </div>
          </div>

          <div className="meeting-info">
            <TimeRangeCard
              startTime={startTime}
              endTime={endTime}
              project={project}
              showTime={true}
            />
          </div>
          <div className="actions">
            {renderButton}
            <img
              src={IconMore}
              className="action-more"
              onClick={() => alert("点击更多")}
            ></img>
          </div>
        </div>
        {showisExpand && (
          <div
            className={`task-section-table ${isExpand ? "expand" : "collapse"}`}
          >
            <CustomTable historyRecord={listdata} />
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskSection;
