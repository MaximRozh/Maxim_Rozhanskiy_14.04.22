import React, { FC, useEffect, useState } from "react";
import Layout from "antd/lib/layout/layout";
import { useDispatch } from "react-redux";
import { useTypeSelector } from "../../hooks/useTypeSelector";
import { ListActionCreator } from "../../store/reducers/lists/action-creator";
import Modal from "../Modal/Modal";
import MovieDetails from "../MovieDetails";
import FavoriteBlock from "../FavoriteBlock";
import GalleryHeader from "../GalleryHeader";
import { ListModel } from "../../models/ListModel";
import GallaryContent from "../GallaryContent";

import style from "./layoutWrap.module.scss";

const LayoutWrap: FC = () => {
  const dispatch = useDispatch();
  const { list, favorite, selected, genres, filtered } = useTypeSelector(
    (state) => state.lists
  );

  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [selectedGenre, setSelectedGenre] = useState<string>("");
  const [viewAs, setViewAs] = useState<boolean>(false);

  useEffect(() => {
    dispatch(ListActionCreator.getList());
  }, [dispatch]);

  const removeFavoriveHandler = (item: ListModel) => {
    dispatch(ListActionCreator.removeFavorite(item.id));
  };

  const handlerFavorite = (item: ListModel, isFavorite: boolean) => {
    isFavorite
      ? removeFavoriveHandler(item)
      : dispatch(ListActionCreator.addToFavorite(item));
  };

  const selectMovie = (id: number) => {
    setModalVisible((prev: boolean) => !prev);
    dispatch(ListActionCreator.getMovieById(id));
  };

  const handleClose = () => {
    setModalVisible(false);
    dispatch(ListActionCreator.cleanUp());
  };

  const handleChangeGanre = (genre: string) => {
    setSelectedGenre(genre);
    dispatch(ListActionCreator.getSelectedGenre(genre));
  };

  const handleChangeView = (isView: boolean) => {
    setViewAs(isView);
  };

  return (
    <>
      <Layout className={style.wrapper}>
        <div className={style.container}>
          <div className={style.gallery}>
            <GalleryHeader
              selectedGenre={selectedGenre}
              handleChangeGanre={handleChangeGanre}
              genres={genres}
              viewAs={viewAs}
              handleChangeView={handleChangeView}
            />
            <GallaryContent
              list={list}
              filtered={filtered}
              selectedMovie={selectMovie}
              handlerFavorite={handlerFavorite}
              viewAs={viewAs}
            />
          </div>
          <FavoriteBlock
            favorite={favorite}
            removeFavoriveHandler={removeFavoriveHandler}
            selectedMovie={selectMovie}
          />
        </div>
      </Layout>
      <Modal open={modalVisible} handleClose={handleClose}>
        <MovieDetails selected={selected} handler={handlerFavorite} />
      </Modal>
    </>
  );
};

export default LayoutWrap;
