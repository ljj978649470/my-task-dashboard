import React from "react";
import "./GameTags.css";

interface GameTagProps {
  type: "timi" | "tencent";
  children: React.ReactNode | string;
  dot?: boolean;
}

const GameTag: React.FC<GameTagProps> = ({ type, children, dot = false }) => {
  const className = `game-tag game-tag--${type} ${dot ? "has-dot" : ""}`;

  return (
    <span className={className}>
      {dot && <i className="dot" />}
      {children}
    </span>
  );
};

export default GameTag;
