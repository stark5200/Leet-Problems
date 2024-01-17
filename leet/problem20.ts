function findDifference(nums1: number[], nums2: number[]): number[][] {
  let answer1: number[] = []
  let answer2: number[] = []
  for (let n in nums1) {
    if (!nums2.includes(nums1[n]) && !answer1.includes(nums1[n])) {
      answer1.push(nums1[n]);
    } 
  }
  for (let n in nums2) {
    if (!nums1.includes(nums2[n]) && !answer2.includes(nums2[n])) {
      answer2.push(nums2[n]);
    } 
  }
  return [answer1, answer2]
};

/* discussion solution 
  Given two arrays nums1 and nums2, returns a list answer of size 2 where:
  - answer[0] is a list of all distinct integers in nums1 which are not present in nums2.
  - answer[1] is a list of all distinct integers in nums2 which are not present in nums1.
  Note that the integers in the lists may be returned in any order.
  @param nums1 - The first array of integers.
  @param nums2 - The second array of integers.
  @returns A 2D array representing the difference of two arrays.
 
function findDifference(nums1: number[], nums2: number[]): number[][] {
  // Create sets to store unique elements in nums1 and nums2
  const uniqueNum1 = new Set(nums1);
  const uniqueNum2 = new Set(nums2);

  // Find distinct integers in nums1 that are not present in nums2
  const diff1 = [...uniqueNum1].filter((num) => !uniqueNum2.has(num));

  // Find distinct integers in nums2 that are not present in nums1
  const diff2 = [...uniqueNum2].filter((num) => !uniqueNum1.has(num));

  // Return the result as a 2D array
  return [diff1, diff2];
}
*/