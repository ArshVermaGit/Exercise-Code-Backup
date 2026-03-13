export function count(lines) {
  const grid = lines.map(row => row.split(""));
  const rows = grid.length;
  const cols = grid[0]?.length || 0;

  let rectangles = 0;

  function validHorizontal(r, c1, c2) {
    for (let c = c1 + 1; c < c2; c++) {
      if (grid[r][c] !== "-" && grid[r][c] !== "+") return false;
    }
    return true;
  }

  function validVertical(c, r1, r2) {
    for (let r = r1 + 1; r < r2; r++) {
      if (grid[r][c] !== "|" && grid[r][c] !== "+") return false;
    }
    return true;
  }

  for (let r = 0; r < rows; r++) {
    for (let c1 = 0; c1 < cols; c1++) {
      if (grid[r][c1] !== "+") continue;

      for (let c2 = c1 + 1; c2 < cols; c2++) {
        if (grid[r][c2] !== "+") continue;

        if (!validHorizontal(r, c1, c2)) continue;

        for (let r2 = r + 1; r2 < rows; r2++) {
          if (
            grid[r2][c1] === "+" &&
            grid[r2][c2] === "+" &&
            validHorizontal(r2, c1, c2) &&
            validVertical(c1, r, r2) &&
            validVertical(c2, r, r2)
          ) {
            rectangles++;
          }
        }
      }
    }
  }

  return rectangles;
}