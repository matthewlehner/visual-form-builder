export function randomId() {
  return Array(5 + 1).join(
    (Math.random().toString(36) + "00000000000000000").slice(2, 18)
  ).slice(0, 5);
}

export function addIdsToArrayOfObjects(array) {
  return array.map((item) => {
    const itemWithId = Object.assign({}, item, {id: randomId()});
    return itemWithId;
  });
}

export function removeIdsFromArrayOfObjects(array) {
  return array.map((item) => {
    let newItem = Object.assign({}, item);
    delete newItem.id; // eslint-disable-line no-param-reassign
    return newItem;
  });
}
