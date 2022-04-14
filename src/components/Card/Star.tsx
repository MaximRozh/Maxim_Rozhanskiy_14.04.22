import { StarFilled, StarOutlined } from "@ant-design/icons";
import React, { FC } from "react";
import { ListModel } from "../../models/ListModel";

interface StarProps {
  isFavorite: boolean;
  item: ListModel;
  handler: (item: ListModel, isFavorite: boolean) => void;
  left?: boolean;
}

const Star: FC<StarProps> = ({ isFavorite, item, handler, left }) => {
  return (
    <div
      onClick={() => handler(item, isFavorite)}
      style={left ? { position: "absolute", right: "-10px", top: "-10px" } : {}}
    >
      {isFavorite ? (
        <StarFilled style={{ fontSize: "35px", color: "#F5887F" }} />
      ) : (
        <StarOutlined style={{ fontSize: "35px", color: "#F5887F" }} />
      )}
    </div>
  );
};
export default Star;
