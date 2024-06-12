import { toFormData } from "axios";
import appApi from "./axios";

const URI_PATH = "publication";

export const postNewPublication = async (data) => {
  try {
    const newPublication = await appApi.post(URI_PATH, toFormData(data), {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return newPublication.data;
  } catch (error) {
    console.log(error);
    throw error.response;
  }
};

export const getPointPublications = async (pointId) => {
  try {
    const postsData = (await appApi.get(`${URI_PATH}/pointInterest/${pointId}`)).data;
    console.log(postsData);
    return postsData;
  } catch (error) {
    throw error;
  }
};

// Get all posts
const getPublications = async () => {
  try {
    const publicationsData = (await appApi.get(URI_PATH)).data;
    console.log(publicationsData);
    return publicationsData;
  } catch (error) {
    console.error("Error fetching publications:", error);
    throw error;
  }
};

export { getPublications };
