const getRandom = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};
// eslint-disable-next-line no-unused-vars
function createRandomId (a, b) {
  const previousId = [];
  return function () {
    let currentId = getRandom(a, b);
    if (previousId.length >= (b - a + 1)) {
      return null;
    }
    while (previousId.includes(currentId)) {
      currentId = getRandom(a, b);
    }
    previousId.push(currentId);
    return currentId;
  };
}
export {createRandomId, getRandom};
