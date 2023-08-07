var subsets = function(nums) {
    const powerset = [];
   generatePowerset([], 0);

   function generatePowerset(path, index) {
       powerset.push(path);
       console.log(path, 'path at beginning')

       for (let i = index; i < nums.length; i++) {
           console.log(path, 'path', i, ' i' , nums[i], 'nums[i]')
           generatePowerset([...path, nums[i]], i + 1);
       }
   }
   console.log('it returned! recursion ended!', powerset, 'PowerSEt after recursion ends')

   return powerset;
};




[] path at beginning
[] path 0  i 1 nums[i]
[ 1 ] path at beginning
[ 1 ] path 1  i 2 nums[i]
[ 1, 2 ] path at beginning
[ 1, 2 ] path 2  i 3 nums[i]
[ 1, 2, 3 ] path at beginning
[ 1 ] path 2  i 3 nums[i]
[ 1, 3 ] path at beginning
[] path 1  i 2 nums[i]
[ 2 ] path at beginning
[ 2 ] path 2  i 3 nums[i]
[ 2, 3 ] path at beginning
[] path 2  i 3 nums[i]
[ 3 ] path at beginning
it returned! recursion ended! [
  [],       [ 1 ],
  [ 1, 2 ], [ 1, 2, 3 ],
  [ 1, 3 ], [ 2 ],
  [ 2, 3 ], [ 3 ]
] PowerSEt after recursion ends
View less 
Output
[[],[1],[1,2],[1,2,3],[1,3],[2],[2,3],[3]]
Expected
[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]