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
  //let distinct: number[] = [...occur].filter((num) => distinct.length==0 ? num : !distinct.includes(num));
  let distinctArray = occur.filter((value, index) => occur.indexOf(value) === index);
  //console.log(occur);
  //console.log(distinctArray);
  if (occur.length == distinctArray.length) {
    return true;
  }
  
  return false;
};

console.log(uniqueOccurrences([1,2,2,1,1,3]));

/* discussion solution

Approach⚡
Initialize a HashMap frequency to store the elements and its occurrence.
Iterate through the given array arr and store the frequency in the HashMap.
Initialize a HashSet storage to store the unique frequency of the elements.
Iterate through the frequency HashMap and store the frequency of elements to storage set.
Check if the N number of elements in frequency HashMap has N unique occurrences in storage HashSet.
frequency.size() == storage.size()
Complexity⌛
Time complexity: O(n), where the input array and the HashMap is Iterated only once. O(n) + O(n) = O(n)
Space complexity: O(n), As we are using HashMap and HashSet to store the elements and its frequency.


const frequency = new Map();

    for(let num of arr) // Store element and its frequency
        if(frequency.has(num)) frequency.set(num, frequency.get(num)+1);
        else frequency.set(num,1);

    // store the frequency 
    const storage = new Set(Array.from(frequency.values()));

    // True if we get n different frequency for n different numbers
    return frequency.size == storage.size;

*/