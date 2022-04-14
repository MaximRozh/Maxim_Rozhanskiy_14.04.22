import React, { FC } from "react";
import SelectInput from "../SelectInput/SelectInput";
import ViewAs from "../ViewAs/ViewAs";
import style from "./galleryHeader.module.scss";

interface GalleryHeaderProps {
  selectedGenre: string;
  genres: string[];
  viewAs: boolean;
  handleChangeGanre: (genre: string) => void;
  handleChangeView: (view: boolean) => void;
}

const GalleryHeader: FC<GalleryHeaderProps> = ({
  selectedGenre,
  handleChangeGanre,
  genres,
  viewAs,
  handleChangeView,
}) => {
  return (
    <div className={style.galleryHeader}>
      <SelectInput
        selectedGenre={selectedGenre}
        handleChangeGanre={handleChangeGanre}
        genres={genres}
      />
      <h2>Movies Gallery</h2>
      <ViewAs viewAs={viewAs} handleChangeView={handleChangeView} />
    </div>
  );
};

export default GalleryHeader;
