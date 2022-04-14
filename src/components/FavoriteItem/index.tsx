import { CloseOutlined } from "@ant-design/icons";
import React, { FC } from "react";
import { ListModel } from "../../models/ListModel";
import style from "./favoriteItem.module.scss";

interface FavoriteItemProps {
  item: ListModel;
  removeFavoriveHandler: (item: ListModel) => void;
  selectedMovie: (id: number) => void;
}

const FavoriteItem: FC<FavoriteItemProps> = ({
  item,
  removeFavoriveHandler,
  selectedMovie,
}) => {
  return (
    <>
      <li className={style.favoriteItem}>
        <span onClick={() => selectedMovie(item.id)}>{item.name}</span>
        <CloseOutlined onClick={() => removeFavoriveHandler(item)} />
      </li>
    </>
  );
};

export default FavoriteItem;
