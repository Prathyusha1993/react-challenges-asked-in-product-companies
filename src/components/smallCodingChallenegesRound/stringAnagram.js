function areAnagrams(str1, str2) {
    // 1. Handle initial conditions: Check length
    if (str1.length !== str2.length) {
      return false;
    }
  
    // 2. Normalize and sort
    const sortedStr1 = str1.toLowerCase().split('').sort().join('');
    const sortedStr2 = str2.toLowerCase().split('').sort().join('');
  
    // 3. Compare sorted strings
    return sortedStr1 === sortedStr2;
  }
  
  // Example usage:
  console.log(areAnagrams("listen", "silent")); // true
  console.log(areAnagrams("hello", "world"));  // false
  console.log(areAnagrams("Debit Card", "Bad Credit"));