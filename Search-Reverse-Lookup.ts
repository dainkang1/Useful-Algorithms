type InvertedIndex = {
    [key: string]: string[];
  };
  
  const books: string[] = [
    'Pride and Prejudice',
    'Designing Data-Intensive Applications',
    'Chaos Monkeys',
    'Chaos and Dynamical Systems',
    'Clean Code',
    'Exit West',
    'The Joy Luck Club',
    // ... more records
  ];
  
  let invertedIndex: InvertedIndex = {};
  
  for(const book of books) {
    const words: string[] = book.split(' ');
  
    for(const word of words) {
      const lowerCaseWord: string = word.toLowerCase();
  
      if (lowerCaseWord === "and") continue;
  
      if(!invertedIndex[lowerCaseWord]) {
        invertedIndex[lowerCaseWord] = [];
      }
      invertedIndex[lowerCaseWord].push(book);
    }
  }
  
  function getSuggestions(userInput: string): string[] {
    const lowerCaseInput: string = userInput.toLowerCase();
    return invertedIndex[lowerCaseInput] ? invertedIndex[lowerCaseInput] : [];
  }
  
  console.log(getSuggestions('Chaos'));  // Output: [ 'Chaos Monkeys', 'Chaos and Dynamical Systems' ]
  

  //could use a TRIE datastructure to store the words and their locations in the books.