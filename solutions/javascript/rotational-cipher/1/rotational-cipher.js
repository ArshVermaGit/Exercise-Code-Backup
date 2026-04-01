export const rotate = (text, key) => {

  return text
    .split('')
    .map(char => {

      const isUpper =
        char >= 'A' && char <= 'Z';

      const isLower =
        char >= 'a' && char <= 'z';

      if (!isUpper && !isLower) {
        return char;
      }

      const base =
        isUpper ? 65 : 97;

      const code =
        char.charCodeAt(0) - base;

      const shifted =
        (code + key) % 26;

      return String.fromCharCode(
        shifted + base
      );

    })
    .join('');

};