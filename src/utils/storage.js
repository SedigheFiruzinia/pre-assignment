const storageKey = "currentBrewery";

const saveBrewery = (brewery) =>
  localStorage.setItem(storageKey, JSON.stringify(brewery));

const loadBrewery = () => JSON.parse(localStorage.getItem(storageKey));

const clearStorage = () => localStorage.removeItem(storageKey);

const toExport = {
  saveBrewery,
  loadBrewery,
  clearStorage,
};

export default toExport;
