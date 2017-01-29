export function getItemFromLocalStorage(key) {
  let item = JSON.parse(localStorage.getItem(key));
  if (item) return item;
}

export function addItemToArrayInLocalStorage(key, value) {
  let item = JSON.parse(localStorage.getItem(key));
  if (item) {
    item.push(value);
    localStorage.setItem(key, JSON.stringify(item));
  } else {
    localStorage.setItem(key, JSON.stringify([value]));
  }
}