export function randomId() {
  return Array(5 + 1).join(
    (Math.random().toString(36) + "00000000000000000").slice(2, 18)
  ).slice(0, 5);
}

export function addIdsArrayOfObjects(array) {
  return array.map((item) => {
    item.id = randomId(); // eslint-disable-line no-param-reassign
    return item;
  });
}

export function removeIdsFromArrayOfObjects(array) {
  return array.map((item) => {
    delete item.id; // eslint-disable-line no-param-reassign
    return item;
  });
}
