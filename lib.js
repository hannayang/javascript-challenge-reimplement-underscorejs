exports.first = (arr, n) => {
  if (n === undefined) {
    return arr[0];
  }
  const items = [];
  for (let i = 0; i < arr.length; i++) {
    if (i < n) {
      items.push(arr[i]);
    }
  }
  return items;
};

exports.initial = (arr, n) => {
  if (n === undefined) {
    n = 1;
  }
  if (n > arr.length) {
    n = arr.length;
  }
  return arr.slice(0, arr.length - n);
}

exports.last = (arr, n) => {
  if (n === undefined) {
    return arr[arr.length - 1];
  }
  if (n > arr.length) {
    n = arr.length;
  }
  if (n <= 0) {
    return [];
  }
  return arr.slice(arr.length - n);
};

exports.rest = (arr, n) => {
  if (n === undefined) {
    n = 1;
  }
  if (n < 0 && n > (-arr.length)) {
    n = n + arr.length;
  }
  if (n <= (-arr.length)) {
    n = 0;
  }
  return arr.slice(n);
};
