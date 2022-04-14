import axios, { AxiosResponse } from "axios";
import { ListModel } from "../models/ListModel";

export default class ListService {
  static async getList(): Promise<AxiosResponse<ListModel[]>> {
    return axios.get<ListModel[]>(
      "https://my-json-server.typicode.com/moviedb-tech/movies/list"
    );
  }
  static async getListById(id: number): Promise<AxiosResponse<ListModel>> {
    return axios.get<ListModel>(
      `https://my-json-server.typicode.com/moviedb-tech/movies/list/${id}`
    );
  }
}
