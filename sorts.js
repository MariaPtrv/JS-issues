function bubbleSort(array) {
  for (let i = array.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (array[j] > array[j + 1]) {
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}

function swap(arr, i, j) {
  let swap = arr[i];
  arr[i] = arr[j];
  arr[j] = swap;
}

function cocktailSort(array) {
  let left = 0;
  let right = array.length - 1;
  while (left < right) {
      for (let i = left; i < right; i++) {
          if (array[i] > array[i + 1]) {
              swap(array, i, i + 1);
          }
      }
      right--;
      for (let i = right; i > left; i--) {
          if (array[i] < array[i - 1]) {
              swap(array, i, i - 1);
          }
      }
      left++;
  }
  return array;
}


function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    const current = array[i];
    let j = i;
    while (j > 0 && array[j - 1] > current) {
      array[j] = array[j - 1];
      j--;
    }
    array[j] = current;
  }
  return array;
}

function selectionSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let indexMin = i;
    for (let j = i + 1; j < array.length; j++) {
        if (array[indexMin] > array[j]) {
            indexMin = j;
        }
    }
    if (indexMin !== i) {
        [array[i], array[indexMin]] = [array[indexMin], array[i]];
    }
}
return array;
}
