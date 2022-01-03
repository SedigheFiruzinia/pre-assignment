import axios from "axios";

const baseUrl = "https://api.openbrewerydb.org/breweries";

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const exportedObject = {
  getAll,
};

export default exportedObject;
