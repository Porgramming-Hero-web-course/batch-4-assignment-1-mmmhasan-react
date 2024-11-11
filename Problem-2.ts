const removeDuplicates = (arr: number[]): number[] => {
  const result: number[] = [];

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    if (result.indexOf(num) === -1) {
      result.push(num);
    }
  }

  return result;
};
