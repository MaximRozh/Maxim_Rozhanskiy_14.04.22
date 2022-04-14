import React, { FC } from "react";
import style from "./ganres.module.scss";

interface GenresProps {
  items: string[];
}

const Ganres: FC<GenresProps> = ({ items }) => {
  return (
    <ul className={style.genre}>
      {items?.map((item: any) => (
        <li key={item} className={style.genreItem}>
          {item}
        </li>
      ))}
    </ul>
  );
};

export default Ganres;
