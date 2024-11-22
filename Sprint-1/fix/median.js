// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

function calculateMedian(list) {
  // Copy and sort the list
  const sortedList = [...list].sort((a, b) => a - b);

  const middleIndex = Math.floor(sortedList.length / 2);

  // If the list has an even length, return the average of the two middle numbers
  if (sortedList.length % 2 === 0) {
    return (sortedList[middleIndex - 1] + sortedList[middleIndex]) / 2;
  } else {
    // If the list has an odd length, return the middle number
    return sortedList[middleIndex];
  }
}

module.exports = calculateMedian;

