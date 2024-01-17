function uniqueOccurrences(arr: number[]): boolean {
  let uniMap = new Map<number, number>();
  for (let n in arr) {
    if (!uniMap.has(arr[n])) {
      uniMap.set(arr[n], 1)
    } else if (uniMap.has(arr[n])) {
      let current: number = Number(uniMap.get(arr[n]));
      uniMap.set(arr[n], current+1)
    }
  }
  console.log(uniMap);

  let occur: number[] = [...uniMap.values()];
  let distinct: number[] = [...occur].filter((num) => distinct.length==0 ? num : !distinct.includes(num));
  if (occur == distinct) {
    return true;
  }
  return false;
};

uniqueOccurrences([1,2,2,1,1,3]);