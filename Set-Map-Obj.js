In ES6 (also known as ECMAScript 2015), three commonly used data structures are `Set`, `Map`, and `Object`. Choosing between them depends on the specific requirements of your use case. Here are some characteristics and typical use cases for each:

1. `Set`:
   - `Set` is a collection of unique values. Duplicates are not allowed.
   - Useful when you want to keep track of a list of items, but don't care about their order or how many times they occur.
   - Operations like add, remove, and check-if-exists (has) are all average constant time O(1).
   - Doesn't support retrieving values by key, because there are no keys.
   
2. `Map`:
   - `Map` is a collection of key-value pairs. Keys can be any type, not just strings or symbols.
   - Order of insertion is preserved, unlike in an `Object`.
   - Commonly used when you need to look up items by a specific identifier. If you need to maintain the insertion order, use a `Map`.
   - Operations like add, remove, and retrieve are all average constant time O(1).
   
3. `Object`:
   - An `Object` is a collection of properties which are (string | symbol) to value pairs.
   - Keys are converted to strings (or symbols), unless they're symbols.
   - The order of insertion is not guaranteed to be preserved (especially when numeric keys are involved).
   - Typically used when you have a fixed set of keys that are known beforehand, as when defining a dictionary, or data record. 
   - It's lightweight and JSON-serializable, unlike `Map` and `Set`.
   - Operations like add, remove, and retrieve are all average constant time O(1).

To sum up, you should use `Set` when you need a collection of unique elements, `Map` when you need a collection of key-value pairs with any type of keys, and `Object` when your keys are strings or symbols and you don't care about the order of elements. Remember that each data structure has its pros and cons, and the best one to use depends on your specific needs.
