function increasingTriplet(nums: number[]): boolean {

    let firstMin = Number.MAX_VALUE;
    let secondMin = Number.MAX_VALUE;
    console.log("initial first Min:" + firstMin);
    console.log("initial second Min:" + secondMin);

    for (let num of nums) {
        if (num <= firstMin) {
            firstMin = num;
            console.log("first Min:" + firstMin);
        } else if (num <= secondMin) {
            secondMin = num;
            console.log("second Min:" + secondMin);
        } else {
            return true;
        }
    }
    
    return false;
};

let testcase = [10, 5, 2, 7, -2, 11];

console.log(increasingTriplet(testcase));
    /* bad code
    let exist = false;
    let len = nums.length;
    let maxnum = Math.max(...nums); 

    //code goes here
    for (let i = 0; i < len; i++) {
        if (nums[i] == maxnum) {
            continue;
        }  
        for (let j = i+1; j < len; j++) {
            if (nums[j] == maxnum) {
                continue;
            }
            for (let k = j+1; k < len; k++) {
                if (nums[i] < nums[j] && nums[j] < nums[k]) {
                    return true;
                }
            }
        }   
    }

    return exist;
    */


/* community solution

*/