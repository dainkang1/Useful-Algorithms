const permute = (nums) => {
    const used = new Set();
    const path = [];
    const res = [];
    
    const dfs = () => {
        console.log('Start dfs, current path:', path);

        if(path.length === nums.length) {
            res.push([...path]);
            console.log('Full permutation found, added to results:', path);
        }

        for(let i = 0; i < nums.length; i++) {
            if(used.has(nums[i])) continue;

            console.log(`Number ${nums[i]} not used, adding to path`);
            path.push(nums[i]);
            used.add(nums[i]);

            dfs();

            console.log(`Backtracking, removing ${nums[i]} from path and marking as unused`);
            path.pop();
            used.delete(nums[i]);
        }

        console.log('End dfs, current path:', path);
    }

    dfs();

    return res;
}


// Start dfs, current path: []
// Number 1 not used, adding to path
// Start dfs, current path: [ 1 ]
// Number 2 not used, adding to path
// Start dfs, current path: [ 1, 2 ]
// Number 3 not used, adding to path
// Start dfs, current path: [ 1, 2, 3 ]
// Full permutation found, added to results: [ 1, 2, 3 ]
// End dfs, current path: [ 1, 2, 3 ]
// Backtracking, removing 3 from path and marking as unused
// End dfs, current path: [ 1, 2 ]
// Backtracking, removing 2 from path and marking as unused
// Number 3 not used, adding to path
// Start dfs, current path: [ 1, 3 ]
// Number 2 not used, adding to path
// Start dfs, current path: [ 1, 3, 2 ]
// Full permutation found, added to results: [ 1, 3, 2 ]
// End dfs, current path: [ 1, 3, 2 ]
// Backtracking, removing 2 from path and marking as unused
// End dfs, current path: [ 1, 3 ]
// Backtracking, removing 3 from path and marking as unused
// End dfs, current path: [ 1 ]
// Backtracking, removing 1 from path and marking as unused
// Number 2 not used, adding to path
// Start dfs, current path: [ 2 ]
// Number 1 not used, adding to path
// Start dfs, current path: [ 2, 1 ]
// Number 3 not used, adding to path
// Start dfs, current path: [ 2, 1, 3 ]
// Full permutation found, added to results: [ 2, 1, 3 ]
// End dfs, current path: [ 2, 1, 3 ]
// Backtracking, removing 3 from path and marking as unused
// End dfs, current path: [ 2, 1 ]
// Backtracking, removing 1 from path and marking as unused
// Number 3 not used, adding to path
// Start dfs, current path: [ 2, 3 ]
// Number 1 not used, adding to path
// Start dfs, current path: [ 2, 3, 1 ]
// Full permutation found, added to results: [ 2, 3, 1 ]
// End dfs, current path: [ 2, 3, 1 ]
// Backtracking, removing 1 from path and marking as unused
// End dfs, current path: [ 2, 3 ]
// Backtracking, removing 3 from path and marking as unused
// End dfs, current path: [ 2 ]
// Backtracking, removing 2 from path and marking as unused
// Number 3 not used, adding to path
// Start dfs, current path: [ 3 ]
// Number 1 not used, adding to path
// Start dfs, current path: [ 3, 1 ]
// Number 2 not used, adding to path
// Start dfs, current path: [ 3, 1, 2 ]
// Full permutation found, added to results: [ 3, 1, 2 ]
// End dfs, current path: [ 3, 1, 2 ]
// Backtracking, removing 2 from path and marking as unused
// End dfs, current path: [ 3, 1 ]
// Backtracking, removing 1 from path and marking as unused
// Number 2 not used, adding to path
// Start dfs, current path: [ 3, 2 ]
// Number 1 not used, adding to path
// Start dfs, current path: [ 3, 2, 1 ]
// Full permutation found, added to results: [ 3, 2, 1 ]
// End dfs, current path: [ 3, 2, 1 ]
// Backtracking, removing 1 from path and marking as unused
// End dfs, current path: [ 3, 2 ]
// Backtracking, removing 2 from path and marking as unused
// End dfs, current path: [ 3 ]
// Backtracking, removing 3 from path and marking as unused
// End dfs, current path: []