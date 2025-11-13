import React, { useState } from "react";
import TaskSection from "../components/TaskSection";
import { type Task } from "../components/TaskSection";
import "./TaskDashboard.css";

const mockMembers = [
  { id: 1, name: "张三", avatar: "https://i.pravatar.cc/40?img=1" },
  { id: 2, name: "李四", avatar: "https://i.pravatar.cc/40?img=2" },
  { id: 3, name: "王五", avatar: "https://i.pravatar.cc/40?img=3" },
];

const data = [
  {
    key: "1",
    title: "NGR流失访谈(4)",
    time: "2024-08-19 19:30",
    address: "端手游体验室(深圳-D1-0445)",
    name: "luceyyang(杨琪丹)",
  },
  {
    key: "2",
    title: "NGR流失访谈(4)",
    time: "2024-08-19 19:30",
    address: "端手游体验室(深圳-D1-0445)",
    name: "luceyyang(杨琪丹)",
  },
  {
    key: "3",
    title: "NGR流失访谈(4)",
    time: "2024-08-19 19:30",
    address: "端手游体验室(深圳-D1-0445)",
    name: "luceyyang(杨琪丹)",
  },
  {
    key: "4",
    title: "NGR流失访谈(4)",
    time: "2024-08-19 19:30",
    address: "端手游体验室(深圳-D1-0445)",
    name: "luceyyang(杨琪丹)",
  },
];
const testData = [
  {
    id: "1",
    title: "NGR体验实验 Product1",
    tag: ["天美", "王者荣耀"],
    status: "ongoing",
    startTime: "2024-10-11 18:00",
    endTime: "2024-10-11 19:00",
    project: "博丰科技实验室(DL-0446)",
    creator: mockMembers,
    assistant: mockMembers,
    listdata: data,
  },
  {
    id: "2",
    title: "NGR体验实验 Product2",
    tag: ["天美", "王者荣耀"],
    status: "paused",
    startTime: "2024-10-11 18:00",
    endTime: "2024-10-11 19:00",
    project: "博丰科技实验室(DL-0446)",
    creator: mockMembers,
    assistant: mockMembers,
    listdata: data,
  },
  {
    id: "3",
    title: "NGR体验实验 Product3",
    tag: ["天美", "王者荣耀"],
    status: "notStarted",
    startTime: "2024-10-11 18:00",
    endTime: "2024-10-11 19:00",
    project: "博丰科技实验室(DL-0446)",
    creator: mockMembers,
    assistant: mockMembers,
    listdata: data,
  },
  {
    id: "4",
    title: "NGR体验实验 Product4",
    tag: ["天美", "王者荣耀"],
    status: "historical",
    startTime: "2024-10-11 18:00",
    endTime: "2024-10-11 19:00",
    project: "博丰科技实验室(DL-0446)",
    creator: mockMembers,
    assistant: mockMembers,
    listdata: data,
  },
  {
    id: "5",
    title: "NGR体验实验 Product5",
    tag: ["天美", "王者荣耀"],
    status: "historical",
    startTime: "2024-10-11 18:00",
    endTime: "2024-10-11 19:00",
    project: "博丰科技实验室(DL-0446)",
    creator: mockMembers,
    assistant: mockMembers,
    listdata: data,
  },
  {
    id: "6",
    title: "NGR体验实验 Product6",
    tag: ["天美", "王者荣耀"],
    status: "historical",
    startTime: "2024-10-11 18:00",
    endTime: "2024-10-11 19:00",
    project: "博丰科技实验室(DL-0446)",
    creator: mockMembers,
    assistant: mockMembers,
    listdata: data,
  },
  {
    id: "7",
    title: "NGR体验实验 Product7",
    tag: ["天美", "王者荣耀"],
    status: "historical",
    startTime: "2024-10-11 18:00",
    endTime: "2024-10-11 19:00",
    project: "博丰科技实验室(DL-0446)",
    creator: mockMembers,
    assistant: mockMembers,
    listdata: data,
  },
];

const TaskDashboard: React.FC = () => {
  const [search, setSearch] = useState("");
  const filteredTasks = testData.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  const ongoingTasks: Task[] = filteredTasks.filter(
    (t) => t.status === "ongoing"
  );
  const pausedTasks: Task[] = filteredTasks.filter(
    (t) => t.status === "paused"
  );
  const notStartedTasks: Task[] = filteredTasks.filter(
    (t) => t.status === "notStarted"
  );
  const historicalTasks: Task[] = filteredTasks.filter(
    (t) => t.status === "historical"
  );
  return (
    <div className="taskDashboardPage">
      <div className="yemei" />
      <div className="heard">
        <h1 className="title">我的座谈会 (999)</h1>
        <input
          type="text"
          placeholder="输入实验名称搜索"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border rounded px-3 py-2 w-64"
        />
      </div>
      <div className="sectionContainer">
        <h2 className="sectionTitle">进行中</h2>
        {ongoingTasks?.length &&
          ongoingTasks.length > 0 &&
          ongoingTasks.map((task) => (
            <TaskSection tasks={task} key={task.id} />
          ))}
        <h2 className="sectionTitle">暂停中</h2>
        {pausedTasks?.length &&
          pausedTasks.length > 0 &&
          pausedTasks.map((task) => <TaskSection tasks={task} key={task.id} />)}
        <h2 className="sectionTitle">未开始</h2>
        {notStartedTasks?.length &&
          notStartedTasks.length > 0 &&
          notStartedTasks.map((task) => (
            <TaskSection tasks={task} key={task.id} />
          ))}
        <h2 className="sectionTitle">历史任务</h2>
        {historicalTasks?.length &&
          historicalTasks.length > 0 &&
          historicalTasks.map((task) => (
            <TaskSection tasks={task} key={task.id} />
          ))}
      </div>
    </div>
  );
};

export default TaskDashboard;
