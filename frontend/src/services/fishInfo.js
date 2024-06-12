import appApi from "../api/axios";

const URI_PATH = "fish";

export default class FishInfoService {
  static async fetchFishData(limit = null) {
    const queryString = limit ? `?limit=${limit}` : "";
    return (await appApi.get(`${URI_PATH}${queryString}`)).data;
  }

  static async fetchFishDataById(id) {
    return (await appApi.get(`${URI_PATH}/${id}`)).data;
  }

  static async fetchGetTipById(id) {
    return (await appApi.get(`tips/${id}`)).data;
  }
}
