import { ListActionEnum, ReqAction, ListState } from "./types";

const initialState: ListState = {
  foo: true,
  list: [],
  filtered: [],
  favorite: [],
  selected: null,
  genres: [],
};

export default function reqReducer(
  state = initialState,
  action: ReqAction
): ListState {
  switch (action.type) {
    case ListActionEnum.SET_LIST:
      return { ...state, list: action.payload };
    case ListActionEnum.SET_GENRES:
      return { ...state, genres: action.payload };
    case ListActionEnum.SELECTED_GENRES:
      return { ...state, filtered: action.payload };
    case ListActionEnum.SET_FAVORITE:
      return { ...state, favorite: action.payload };
    case ListActionEnum.GET_MOVIE_BY_ID:
      return { ...state, selected: action.payload };
    case ListActionEnum.CLEAN_UP:
      return { ...state, selected: null };
    default:
      return state;
  }
}
