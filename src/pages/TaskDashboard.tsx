import React, { useState, useMemo } from "react";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import TaskSection, { type SymposiumData } from "../components/TaskSection";

import "./TaskDashboard.css";

const mockMembers = [
  { id: 1, name: "张三", avatar: "https://i.pravatar.cc/40?img=1" },
  { id: 2, name: "李四", avatar: "https://i.pravatar.cc/40?img=2" },
  { id: 3, name: "王五", avatar: "https://i.pravatar.cc/40?img=3" },
  { id: 4, name: "张三", avatar: "https://i.pravatar.cc/40?img=1" },
  { id: 5, name: "李四", avatar: "https://i.pravatar.cc/40?img=2" },
  { id: 6, name: "王五", avatar: "https://i.pravatar.cc/40?img=3" },
  { id: 7, name: "张三", avatar: "https://i.pravatar.cc/40?img=1" },
  { id: 8, name: "李四", avatar: "https://i.pravatar.cc/40?img=2" },
  { id: 9, name: "王五", avatar: "https://i.pravatar.cc/40?img=3" },
];

const data = [
  {
    key: "1",
    title: "NGR流失访谈(4)",
    time: "2024-10-10",
    startTime: "1728556800000",
    endTime: "1728560400000",
    address: "端手游体验室(深圳-D1-0445)",
    name: "luceyyang(杨琪丹)",
  },
  {
    key: "2",
    title: "NGR流失访谈(4)",
    time: "2024-10-10",
    startTime: "1728556800000",
    endTime: "1728560400000",
    address: "端手游体验室(深圳-D1-0445)",
    name: "luceyyang(杨琪丹)",
  },
  {
    key: "3",
    title: "NGR流失访谈(4)",
    time: "2024-10-10",
    startTime: "1728556800000",
    endTime: "1728560400000",
    address: "端手游体验室(深圳-D1-0445)",
    name: "luceyyang(杨琪丹)",
  },
  {
    key: "4",
    title: "NGR流失访谈(4)",
    time: "2024-10-10",
    startTime: "1728556800000",
    endTime: "1728560400000",
    address: "端手游体验室(深圳-D1-0445)",
    name: "luceyyang(杨琪丹)",
  },
];
const testData: SymposiumData[] = [
  {
    id: "1",
    title: "NGR体验实验 Product1",
    tag: [
      {
        name: "天美",
        type: "timi",
      },
      {
        name: "王者荣耀",
        type: "tencent",
      },
    ],
    status: "ongoing",
    startTime: "1728556800000",
    endTime: "1728560400000",
    project: "博丰科技实验室(DL-0446)",
    creator: mockMembers,
    assistant: mockMembers,
    listdata: [],
  },
  {
    id: "2",
    title: "NGR体验实验 Product2",
    tag: [
      {
        name: "天美",
        type: "timi",
      },
      {
        name: "王者荣耀",
        type: "tencent",
      },
    ],
    status: "paused",
    startTime: "1728556800000",
    endTime: "1728560400000",
    project: "博丰科技实验室(DL-0446)",
    creator: mockMembers,
    assistant: mockMembers,
    listdata: data,
  },
  {
    id: "3",
    title: "NGR体验实验 Product3",
    tag: [
      {
        name: "天美",
        type: "timi",
      },
      {
        name: "王者荣耀",
        type: "tencent",
      },
    ],
    status: "notStarted",
    startTime: "1728556800000",
    endTime: "1728560400000",
    project: "博丰科技实验室(DL-0446)",
    creator: mockMembers,
    assistant: mockMembers,
    listdata: data,
  },
  {
    id: "4",
    title: "NGR体验实验 Product4",
    tag: [
      {
        name: "天美",
        type: "timi",
      },
      {
        name: "王者荣耀",
        type: "tencent",
      },
    ],
    status: "historical",
    startTime: "1728556800000",
    endTime: "1728560400000",
    project: "博丰科技实验室(DL-0446)",
    creator: mockMembers,
    assistant: mockMembers,
    listdata: data,
  },
  {
    id: "5",
    title: "NGR体验实验 Product5",
    tag: [
      {
        name: "天美",
        type: "timi",
      },
      {
        name: "王者荣耀",
        type: "tencent",
      },
    ],
    status: "historical",
    startTime: "1728556800000",
    endTime: "1728560400000",
    project: "博丰科技实验室(DL-0446)",
    creator: mockMembers,
    assistant: mockMembers,
    listdata: data,
  },
  {
    id: "6",
    title: "NGR体验实验 Product6",
    tag: [
      {
        name: "天美",
        type: "timi",
      },
      {
        name: "王者荣耀",
        type: "tencent",
      },
    ],
    status: "historical",
    startTime: "1728556800000",
    endTime: "1728560400000",
    project: "博丰科技实验室(DL-0446)",
    creator: mockMembers,
    assistant: mockMembers,
    listdata: data,
  },
  {
    id: "7",
    title: "NGR体验实验 Product7",
    tag: [
      {
        name: "天美",
        type: "timi",
      },
      {
        name: "王者荣耀",
        type: "tencent",
      },
    ],
    status: "historical",
    startTime: "1728643200000",
    endTime: "1728646800000",
    project: "博丰科技实验室(DL-0446)",
    creator: mockMembers,
    assistant: mockMembers,
    listdata: data,
  },
];

const TaskDashboard: React.FC = () => {
  const [search, setSearch] = useState("");
  const filteredTasks = useMemo(() => {
    const lower = search.toLowerCase();
    return testData.filter((item) => item.title.toLowerCase().includes(lower));
  }, [search]);

  const ongoingTasks: SymposiumData[] = useMemo(
    () => filteredTasks.filter((t) => t.status === "ongoing"),
    [filteredTasks]
  );
  const pausedTasks: SymposiumData[] = useMemo(
    () => filteredTasks.filter((t) => t.status === "paused"),
    [filteredTasks]
  );
  const notStartedTasks: SymposiumData[] = useMemo(
    () => filteredTasks.filter((t) => t.status === "notStarted"),
    [filteredTasks]
  );
  const historicalTasks: SymposiumData[] = useMemo(
    () => filteredTasks.filter((t) => t.status === "historical"),
    [filteredTasks]
  );

  return (
    <div className="taskDashboardPage">
      <div className="heard">
        <h1 className="title">我的座谈会 ({testData?.length})</h1>
        <Input
          placeholder="输入实验名称搜索"
          style={{ width: 220, height: 40 }}
          value={search}
          prefix={<SearchOutlined />}
          onChange={(e) => setSearch(e.target.value)}
          allowClear
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

export default React.memo(TaskDashboard);
