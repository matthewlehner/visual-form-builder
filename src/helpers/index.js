export function randomId() {
  return Array(5 + 1).join(
    (Math.random().toString(36) + "00000000000000000").slice(2, 18)
  ).slice(0, 5);
}
