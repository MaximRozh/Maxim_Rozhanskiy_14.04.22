import { AppDispatch, RootState } from "../..";
import ListService from "../../../api/ListService";
import { ListModel } from "../../../models/ListModel";
import {
  getFromLocalstarage,
  setToLocalstarage,
} from "../../../utils/localstorage";
import {
  GetMovieAction,
  ListActionEnum,
  SelectedGenresAction,
  SetFavoriteAction,
  SetGenresAction,
  SetListAction,
} from "./types";

export const ListActionCreator = {
  setList: (payload: ListModel[]): SetListAction => ({
    type: ListActionEnum.SET_LIST,
    payload: payload,
  }),
  setMovieById: (movie: ListModel): GetMovieAction => ({
    type: ListActionEnum.GET_MOVIE_BY_ID,
    payload: movie,
  }),
  setFavorite: (favorite: ListModel[]): SetFavoriteAction => ({
    type: ListActionEnum.SET_FAVORITE,
    payload: favorite,
  }),
  setGanres: (filteredMovie: ListModel[]): SelectedGenresAction => ({
    type: ListActionEnum.SELECTED_GENRES,
    payload: filteredMovie,
  }),
  cleanUp: () => (dispatch: AppDispatch) => {
    dispatch({
      type: ListActionEnum.CLEAN_UP,
    });
  },

  setGenres: (lists: ListModel[]): SetGenresAction => {
    const genres = lists.reduce((acc: string[], next: ListModel) => {
      const array = [
        ...acc,
        ...next.genres.map(
          (item: any) => item[0].toUpperCase() + item.slice(1)
        ),
      ];
      return Array.from(new Set(array));
    }, []);

    return {
      type: ListActionEnum.SET_GENRES,
      payload: genres,
    };
  },

  getList: () => async (dispatch: AppDispatch) => {
    try {
      const response = await ListService.getList();
      dispatch(ListActionCreator.setList(response.data));
      dispatch(ListActionCreator.setGenres(response.data));

      const favorite = getFromLocalstarage("favorite");
      dispatch(ListActionCreator.setFavorite(favorite));
    } catch (e) {
      console.log(e);
    }
  },

  getSelectedGenre:
    (genre: string) => (dispatch: AppDispatch, getState: () => RootState) => {
      const { lists } = getState();
      const filteredMovie = lists.list.filter((item: ListModel) =>
        item.genres.find(
          (g: string) => g?.toLowerCase() === genre?.toLowerCase()
        )
      );
      dispatch(ListActionCreator.setGanres(filteredMovie));
    },

  getMovieById: (id: number) => async (dispatch: AppDispatch) => {
    try {
      const response = await ListService.getListById(id);
      dispatch(ListActionCreator.setMovieById(response.data));
    } catch (e) {
      console.log(e);
    }
  },

  addToFavorite: (item: ListModel) => (dispatch: AppDispatch) => {
    const favorite = getFromLocalstarage("favorite");
    favorite.push(item);
    setToLocalstarage("favorite", favorite);
    dispatch(ListActionCreator.setFavorite(favorite));
  },

  removeFavorite: (id: number) => (dispatch: AppDispatch) => {
    const favorite = getFromLocalstarage("favorite");
    const filtered = favorite.filter((item: ListModel) => item.id !== id);
    setToLocalstarage("favorite", filtered);

    dispatch(ListActionCreator.setFavorite(filtered));
  },
};
