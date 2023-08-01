    
    const output = []
    const recursion = (permutation, set) =>{
        console.log('What is permutation at STart?', permutation)
        if(set.size === 0){
            output.push(permutation)  
            return
        } 
        for(let val of set){
            console.log(val, 'val', set, 'set')
            const setCopy = new Set(set)
            console.log(setCopy, 'setCopy')
            setCopy.delete(val)
            console.log('Whats going on with permutation', permutation)
            recursion([...permutation, val], setCopy)
        }

    }
    console.log(nums, 'THIS IS WHEN RECURSION CALLED')
    recursion([], new Set(nums))
    return output
};


nums =
[1,2,3]
Stdout
[ 1, 2, 3 ] THIS IS WHEN RECURSION CALLED
What is permutation at STart? []
1 val Set(3) { 1, 2, 3 } set
Set(3) { 1, 2, 3 } setCopy
Whats going on with permutation []
What is permutation at STart? [ 1 ]
2 val Set(2) { 2, 3 } set
Set(2) { 2, 3 } setCopy
Whats going on with permutation [ 1 ]
What is permutation at STart? [ 1, 2 ]
3 val Set(1) { 3 } set
Set(1) { 3 } setCopy
Whats going on with permutation [ 1, 2 ]
What is permutation at STart? [ 1, 2, 3 ]
3 val Set(2) { 2, 3 } set
Set(2) { 2, 3 } setCopy
Whats going on with permutation [ 1 ]
What is permutation at STart? [ 1, 3 ]
2 val Set(1) { 2 } set
Set(1) { 2 } setCopy
Whats going on with permutation [ 1, 3 ]
What is permutation at STart? [ 1, 3, 2 ]
2 val Set(3) { 1, 2, 3 } set
Set(3) { 1, 2, 3 } setCopy
Whats going on with permutation []
What is permutation at STart? [ 2 ]
1 val Set(2) { 1, 3 } set
Set(2) { 1, 3 } setCopy
Whats going on with permutation [ 2 ]
What is permutation at STart? [ 2, 1 ]
3 val Set(1) { 3 } set
Set(1) { 3 } setCopy
Whats going on with permutation [ 2, 1 ]
What is permutation at STart? [ 2, 1, 3 ]
3 val Set(2) { 1, 3 } set
Set(2) { 1, 3 } setCopy
Whats going on with permutation [ 2 ]
What is permutation at STart? [ 2, 3 ]
1 val Set(1) { 1 } set
Set(1) { 1 } setCopy
Whats going on with permutation [ 2, 3 ]
What is permutation at STart? [ 2, 3, 1 ]
3 val Set(3) { 1, 2, 3 } set
Set(3) { 1, 2, 3 } setCopy
Whats going on with permutation []
What is permutation at STart? [ 3 ]
1 val Set(2) { 1, 2 } set
Set(2) { 1, 2 } setCopy
Whats going on with permutation [ 3 ]
What is permutation at STart? [ 3, 1 ]
2 val Set(1) { 2 } set
Set(1) { 2 } setCopy
Whats going on with permutation [ 3, 1 ]
What is permutation at STart? [ 3, 1, 2 ]
2 val Set(2) { 1, 2 } set
Set(2) { 1, 2 } setCopy
Whats going on with permutation [ 3 ]
What is permutation at STart? [ 3, 2 ]
1 val Set(1) { 1 } set
Set(1) { 1 } setCopy
Whats going on with permutation [ 3, 2 ]
What is permutation at STart? [ 3, 2, 1 ]