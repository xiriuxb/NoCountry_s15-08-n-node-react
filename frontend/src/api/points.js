import appApi from "./axios";

const URI_PATH = "pointInterest";

export const getPointsData = async () => {
  try {
    return (await appApi.get(URI_PATH)).data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
