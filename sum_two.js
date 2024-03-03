

// Leetcode (Sum two number with target )
/*

var twoSum = function(nums, target) {
    let result = [];

    for(let i=0; i<nums.length; i++){

        for(let j=i+1; j<nums.length;j++){
            let sum = nums[i] + nums[j];
            if(sum === target){ 
                result.push(i,j);
                return result;
            };
        }
    }
};

console.log(twoSum([1,3,4,6],7));  // answer : [0,3] becuse 1 + 6 = 7

*/
