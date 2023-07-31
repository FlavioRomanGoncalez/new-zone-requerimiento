const setLocalStore = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
}

const getLocalStore = (key) => {
  JSON.parse(localStorage.getItem(key));
}

const removeLocalStore = (key) => {
  localStorage.removeItem(key);
}

export default { setLocalStore, getLocalStore, removeLocalStore }