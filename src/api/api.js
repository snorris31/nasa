import { apiData } from "../store";
export const updateQuery = async (queryValue, page) => {
    const url = `https://images-api.nasa.gov/search?q=${queryValue}&page=${page}&page_size=50`;
    try {
      const response = await fetch(url);
      const jsonresponse = await response.json();
      apiData.set(jsonresponse.collection.items);
      return "Done";
    } catch (e) {
      console.error("Error while calling", url, e);
      return "Failed";
    }
  };