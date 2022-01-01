import axios from "axios";

const baseUrl = "https://api.openbrewerydb.org/breweries";

const get = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const exportedObject = {
  get,
};

export default exportedObject;
