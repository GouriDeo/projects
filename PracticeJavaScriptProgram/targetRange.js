
  function findFirstIndex(nums, target) {
    var index = -1; //if cant find, return index=-1, will not execute below action
    var start = 0;
    var end = nums.length - 1;
    while (start <= end) {
      var midPoint = Math.floor(start + (end - start) / 2);
      if (nums[midPoint] >= target) {
        end = midPoint - 1;
      } else {
        start = midPoint + 1;
      }
  
      if (nums[midPoint] === target) {
        index = midPoint;
      }
    }
    return index;
  }

  var searchRange = function(nums, target) {
    if(nums.length == 0) return [-1,-1];
    var result = [];
    var index = findFirstIndex(nums, target);
    result[0] = index;
    var value = nums[index];
    console.log("Hello");

    while(nums[index] === value){index++}

    result[1] = index - 1;
    console.log(result)
    return result;
};

searchRange([5,7,8,8,8,10], 10);