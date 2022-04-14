import React, { FC } from "react";
import style from "./CardItem.module.scss";
import { useTypeSelector } from "../../hooks/useTypeSelector";
import Star from "./Star";
import Ganres from "../Ganres";
import { ListModel } from "../../models/ListModel";

interface CardItemProp {
  item: ListModel;
  selectedMovie: (id: number) => void;
  handler: (item: ListModel, isFavorite: boolean) => void;
  viewAs: boolean;
}

const CardItem: FC<CardItemProp> = ({
  item,
  selectedMovie,
  handler,
  viewAs,
}) => {
  const { favorite } = useTypeSelector((state) => state.lists);
  const isFavorite = favorite.some((favor: ListModel) => favor.id === item.id);

  return (
    <li className={`${style.cardWrap} ${viewAs ? style.cardWrapRow : ""}`}>
      <Star isFavorite={isFavorite} handler={handler} item={item} left />
      <div onClick={() => selectedMovie(item.id)}>
        <div className={`${style.content} ${viewAs ? style.contentRow : ""}`}>
          <img src={item.img} />

          <div className={`${style.info} ${viewAs ? style.infoRow : ""}`}>
            <h3 className={style.title}>{item.name}</h3>
            <span>{item.year}</span>

            {viewAs ? (
              <>
                <p className={style.text}>{item.description}</p>
                <Ganres items={item?.genres} />
              </>
            ) : null}
          </div>
        </div>
      </div>
    </li>
  );
};

export default CardItem;
