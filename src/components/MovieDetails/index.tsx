import { Spin } from "antd";
import React, { FC, useMemo } from "react";
import { useTypeSelector } from "../../hooks/useTypeSelector";
import { ListModel } from "../../models/ListModel";
import Star from "../Card/Star";
import Ganres from "../Ganres";
import style from "./moveiDetails.module.scss";

interface MovieDetailsProps {
  selected: ListModel | null;
  handler: (item: ListModel, isFavorite: boolean) => void;
}

const MovieDetails: FC<MovieDetailsProps> = ({ selected, handler }) => {
  const { favorite } = useTypeSelector((state) => state.lists);

  const isFavorite = useMemo(
    () => favorite.some((favor: ListModel) => favor.id === selected?.id),
    [favorite]
  );

  return (
    <div className={style.modalWrap}>
      {!selected ? (
        <Spin style={{ width: 56, height: 56 }} tip="Loading..." />
      ) : (
        <>
          <div className={style.info}>
            <img src={selected.img} />
            <div className={style.underImg}>
              <Star isFavorite={isFavorite} handler={handler} item={selected} />
              <div className={style.year}>{selected?.year}</div>
            </div>
            <Ganres items={selected?.genres} />
          </div>
          <div className={style.details}>
            <h2>{selected?.name}</h2>
            <p>{selected?.description}</p>
            <div>Director: {selected?.director}</div>
            <div>
              Starring:{" "}
              {selected?.starring.map((item: any) => (
                <span key={item}>{item}, </span>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MovieDetails;
