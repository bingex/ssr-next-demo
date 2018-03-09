export function getRandomItems(count, input_array) {
  let result_array = [];

  while (result_array.length < count) {
    let random_item =
      input_array[Math.floor(Math.random() * input_array.length)];
    if (result_array.indexOf(random_item) === -1) {
      result_array.push(random_item);
    }
  }

  return result_array;
}
