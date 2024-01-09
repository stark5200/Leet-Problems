function increasingTriplet(nums: number[]): boolean {
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
};

/* Chat gpt solution
function increasingTriplet(nums: number[]): boolean {
    let firstMin = Number.MAX_VALUE;
    let secondMin = Number.MAX_VALUE;

    for (let num of nums) {
        if (num <= firstMin) {
            firstMin = num;
        } else if (num <= secondMin) {
            secondMin = num;
        } else {
            return true;
        }
    }

    return false;
}
*/