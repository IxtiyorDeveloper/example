export default {
  get: (key) => {
    if (window.localStorage) {
      return window.localStorage.getItem(key);
    }
    return null;
  },

  set: (key, value) => {
    if (window.localStorage) {
      window.localStorage.setItem(key, value);
    }
  },

  remove: (key) => {
    if (window.localStorage && window.localStorage[key]) {
      window.localStorage.removeItem(key);
      return true;
    }
  },
};
