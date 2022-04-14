import { ListModel } from "../../../models/ListModel";

export interface ListState {
  foo: boolean;
  list: ListModel[];
  favorite: ListModel[];
  selected: ListModel | null;
  genres: string[];
  filtered: ListModel[];
}

export enum ListActionEnum {
  SET_FAVORITE = "SET_FAVORITE",
  SET_LIST = "SET_LIST",
  SET_GENRES = "SET_GENRES",
  GET_MOVIE_BY_ID = "GET_MOVIE_BY_ID",
  CLEAN_UP = "CLEAN_UP",
  SELECTED_GENRES = "SELECTED_GENRES",
}

export interface SetListAction {
  type: ListActionEnum.SET_LIST;
  payload: ListModel[];
}

export interface SetGenresAction {
  type: ListActionEnum.SET_GENRES;
  payload: string[];
}

export interface SelectedGenresAction {
  type: ListActionEnum.SELECTED_GENRES;
  payload: ListModel[];
}

export interface CleanUpAction {
  type: ListActionEnum.CLEAN_UP;
}

export interface GetMovieAction {
  type: ListActionEnum.GET_MOVIE_BY_ID;
  payload: ListModel;
}

export interface SetFavoriteAction {
  type: ListActionEnum.SET_FAVORITE;
  payload: ListModel[];
}

export type ReqAction =
  | SetFavoriteAction
  | SetListAction
  | GetMovieAction
  | CleanUpAction
  | SetGenresAction
  | SelectedGenresAction;
