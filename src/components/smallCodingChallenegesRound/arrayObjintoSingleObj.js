const data = [
    { id: 1, name: 'Alice', category: 'A' },
    { id: 2, name: 'Bob', category: 'B' },
    { id: 3, name: 'Charlie', category: 'A' },
    { id: 4, name: 'David', category: 'C' },
    { id: 5, name: 'Eve', category: 'B' },
  ];
  
  const groupedByCategory = data.reduce((accumulator, currentObject) => {
    const key = currentObject.category;
    if (!accumulator[key]) {
      accumulator[key] = [];
    }
    accumulator[key].push(currentObject);
    return accumulator;
  }, {});
  
  console.log(groupedByCategory);