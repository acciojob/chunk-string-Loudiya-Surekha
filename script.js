function stringChop(str, size) {
  // Convert size to a number
  size = Number(size);

  // Handle null or invalid input
  if (str === null || size <= 0 || isNaN(size)) {
    return [];
  }

  // If chunk size is greater than string length
  if (size >= str.length) {
    return [str];
  }

  let result = [];
  for (let i = 0; i < str.length; i += size) {
    result.push(str.slice(i, i + size));
  }

  return result;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
const chunks = stringChop(str, size);
alert(JSON.stringify(chunks)); // Display as string but keep logic clean
