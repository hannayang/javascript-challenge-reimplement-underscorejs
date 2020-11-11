exports.first = (arr, n) => {
  const items = [];
  for (let i = 0; i < arr.length; i++) {
    if (i < n) {
      items.push(arr[i]);
    }
  }
  return items;
};
