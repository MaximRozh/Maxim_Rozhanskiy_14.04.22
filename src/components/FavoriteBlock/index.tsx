import { StarFilled } from "@ant-design/icons";
import React, { FC } from "react";
import { ListModel } from "../../models/ListModel";
import FavoriteItem from "../FavoriteItem";
import style from "./favoriteBlock.module.scss";

interface FavoriteBlockProps {
  favorite: ListModel[];
  removeFavoriveHandler: (item: ListModel) => void;
  selectedMovie: (id: number) => void;
}

const FavoriteBlock: FC<FavoriteBlockProps> = ({
  favorite,
  removeFavoriveHandler,
  selectedMovie,
}) => {
  return (
    <div className={style.faivorit}>
      <div className={style.faivoritHead}>
        <StarFilled style={{ fontSize: "35px", color: "#F5887F" }} />{" "}
        <h2 className={style.faivoritText}>Favorite</h2>
      </div>
      <div>
        <ul className={style.faivoriteList}>
          {favorite.map((item: any) => (
            <FavoriteItem
              item={item}
              key={item.id}
              removeFavoriveHandler={removeFavoriveHandler}
              selectedMovie={selectedMovie}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FavoriteBlock;
