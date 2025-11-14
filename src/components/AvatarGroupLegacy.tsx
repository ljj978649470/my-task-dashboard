import React from "react";
import "./AvatarGroupLegacy.css";
import { Avatar, Tooltip } from "antd";

export interface User {
  id: string | number;
  name: string;
  avatar: string;
}

interface AvatarGroupLegacyProps {
  data: User[];
  label?: string;
  size?: "small" | "default" | "large";
  maxCount?: number;
  maxStyle?: React.CSSProperties;
  maxPopoverTrigger?: "click" | "hover";
}

const AvatarGroupLegacy: React.FC<AvatarGroupLegacyProps> = ({
  label,
  data,
  size = "small",
  maxCount = 4,
  maxStyle,
  maxPopoverTrigger = "click",
}) => {
  return (
    <div className="assistant">
      <p className="label">{label}</p>
      <Avatar.Group
        size={size}
        max={{
          count: maxCount,
          style: maxStyle,
          popover: { trigger: maxPopoverTrigger },
        }}
      >
        {data.map((item) => (
          <Tooltip title={item.name} key={item.id}>
            <Avatar size={size} src={item.avatar} />
          </Tooltip>
        ))}
      </Avatar.Group>
    </div>
  );
};

export default AvatarGroupLegacy;
