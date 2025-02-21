
const localStorageKey = "todo";

export const getLocalStorage = () => {
  const data = localStorage.getItem(localStorageKey);
  if (!data) return [];
  return JSON.parse(data);
};

export const setLocalStorage = (task) => {

    localStorage.setItem(localStorageKey, JSON.stringify(task))
}

