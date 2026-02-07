export function frontDoorResponse(line) {
  return line[0];
}

export function frontDoorPassword(word) {
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
}

export function backDoorResponse(line) {
  const trimmed = line.trim();
  return trimmed[trimmed.length - 1];
}

export function backDoorPassword(word) {
  const formatted =
    word[0].toUpperCase() + word.slice(1).toLowerCase();
  return formatted + ', please';
}
