function dailyTemperatures(temp) {
    let stack = [];
    let result = new Array(temp.length).fill(0);

    for(let i = 0; i < temp.length; i++) {
        while( stack.length !== 0 && temp[i] > temp[stack[stack.length-1]]){
            lastIndex = stack.pop();
            result[lastIndex] = i - lastIndex;
        }
        stack.push(i)
    }

    return result;
}


// This particular algorithm pattern is called the "Next Greater Element" pattern. It is a common pattern that can be efficiently solved using a stack data structure.

// The basic idea behind the pattern is that you want to find the next element in a sequence (like an array or list) that is greater than the current element. In the case of the daily temperatures problem, you're trying to find the next day with a higher temperature.

// The reason a stack is used in this algorithm is because it allows us to keep track of elements for which we have not yet found a greater element. As we traverse the sequence, we can simply pop elements from the stack once we find a greater element, and push elements onto the stack when we don't.

// This pattern and its variations are commonly used in problems involving sequences, where you're trying to find the next or previous element that meets a certain condition.
