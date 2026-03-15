export function saddlePoints(matrix) {
  const result = [];

  for (let i = 0; i < matrix.length; i++) {
    const rowMax = Math.max(...matrix[i]);

    for (let j = 0; j < matrix[i].length; j++) {
      const value = matrix[i][j];

      if (value === rowMax) {
        let isColMin = true;

        for (let k = 0; k < matrix.length; k++) {
          if (matrix[k][j] < value) {
            isColMin = false;
            break;
          }
        }

        if (isColMin) {
          result.push({ row: i + 1, column: j + 1 });
        }
      }
    }
  }

  return result;
}