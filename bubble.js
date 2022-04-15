function bubbleSort(nums) {

  let currentPosition = 0;
  let endpoint = nums.length;
  while(endpoint > 0){
    currentPosition = 0
    while(currentPosition < endpoint){
        if(nums[currentPosition] > nums[currentPosition +1]){
            //swap
            let temp = nums[currentPosition +1];
            nums[currentPosition +1] = nums[currentPosition];
            nums[currentPosition] = temp;
        }
        currentPosition++;
    }
    endpoint--;
  }
  return nums;
}

module.exports = bubbleSort;


let nums = [3,7,2,9,1]