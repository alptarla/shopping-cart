const StorageService = {
  set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },
  get(key) {
    const value = localStorage.getItem(key);
    return JSON.parse(value);
  },
  remove(key) {
    localStorage.removeItem(key);
  },
};

export default StorageService;
