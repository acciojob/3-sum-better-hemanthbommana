function threeSum(arr, target) {
// write your code here
	arr.sort();
  let res = target+1;
	for(let i =0;i<arr.length ;i++){
           let temp = += arr[i];
		if(temp < target && temp <= res){
			res = temp ;
		}
		
	}
	return res;
}

module.exports = threeSum;
