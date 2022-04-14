import { Spin } from "antd";
import React, { FC } from "react";
import { ListModel } from "../../models/ListModel";
import CardItem from "../Card";
import style from "./gallaryContent.module.scss";

interface GallaryContentProps {
  list: ListModel[];
  filtered: ListModel[];
  viewAs: boolean;
  selectedMovie: (id: number) => void;
  handlerFavorite: (item: ListModel, isFavorite: boolean) => void;
}

const GallaryContent: FC<GallaryContentProps> = ({
  list,
  filtered,
  selectedMovie,
  handlerFavorite,
  viewAs,
}) => {
  return (
    <div className={style.galleryContent}>
      {list?.length ? (
        <ul className={style.listItems}>
          {(filtered?.length ? filtered : list).map((item: ListModel) => (
            <CardItem
              key={item.id}
              item={item}
              selectedMovie={selectedMovie}
              handler={handlerFavorite}
              viewAs={viewAs}
            />
          ))}
        </ul>
      ) : (
        <Spin style={{ width: 56, height: 56 }} tip="Loading..." />
      )}
    </div>
  );
};

export default GallaryContent;
