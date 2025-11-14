import React, { useMemo } from "react";
import dayjs from "dayjs";
import "./TimeRangeCard.css";

interface TimeRangeCardProps {
  showTime?: boolean; // 是否显示时分秒，默认 false
  startTime: string | Date | number; // 可传入日期，默认当前时间
  endTime: string | Date | number; // 可传入日期，默认当前时间
  project: string;
}
const TimeRangeCard: React.FC<TimeRangeCardProps> = ({
  startTime,
  endTime = "",
  project,
  showTime,
}) => {
  const fmt = showTime ? "YYYY-MM-DD HH:mm:ss" : "YYYY-MM-DD";

  const handleStartTime = dayjs(Number(startTime)).format(fmt);
  const handleEndTime = dayjs(Number(endTime)).format(fmt);
  const renderTime = useMemo(() => {
    if (showTime) {
      return (
        <div className="format-one">
          <p className="start-time">{handleStartTime} </p>
          <p className="fill">|</p>
          <p className="end-time">{handleEndTime}</p>
        </div>
      );
    }
    return (
      <div className="format-two">
        <p className="start-time">{handleStartTime} </p>
        <p className="fill">to</p>
        <p className="end-time">{handleEndTime}</p>
      </div>
    );
  }, [showTime]);

  return (
    <div className={`time-range-card`}>
      {renderTime}
      <div className="project">
        <p>{project}</p>
      </div>
    </div>
  );
};

export default TimeRangeCard;
