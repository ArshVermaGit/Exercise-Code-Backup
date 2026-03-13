export function convert(input) {
  const lines = input.split('\n');

  if (lines.length % 4 !== 0) {
    throw new Error('Number of input lines is not a multiple of four');
  }

  if (lines[0].length % 3 !== 0) {
    throw new Error('Number of input columns is not a multiple of three');
  }

  const DIGITS = {
    " _ | ||_|   ": "0",
    "     |  |   ": "1",
    " _  _||_    ": "2",
    " _  _| _|   ": "3",
    "   |_|  |   ": "4",
    " _ |_  _|   ": "5",
    " _ |_ |_|   ": "6",
    " _   |  |   ": "7",
    " _ |_||_|   ": "8",
    " _ |_| _|   ": "9"
  };

  const result = [];
  const rows = lines.length;
  const cols = lines[0].length;

  for (let r = 0; r < rows; r += 4) {
    let number = "";

    for (let c = 0; c < cols; c += 3) {
      const pattern =
        lines[r].slice(c, c + 3) +
        lines[r + 1].slice(c, c + 3) +
        lines[r + 2].slice(c, c + 3) +
        lines[r + 3].slice(c, c + 3);

      number += DIGITS[pattern] || "?";
    }

    result.push(number);
  }

  return result.join(",");
}