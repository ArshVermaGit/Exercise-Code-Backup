export const translate = (text) => {
  const vowels = ["a", "e", "i", "o", "u"];

  const translateWord = (word) => {
    if (
      vowels.includes(word[0]) ||
      word.startsWith("xr") ||
      word.startsWith("yt")
    ) {
      return word + "ay";
    }

    const quMatch = word.match(/^([^aeiou]*qu)(.+)/);
    if (quMatch) {
      return quMatch[2] + quMatch[1] + "ay";
    }

    const yMatch = word.match(/^([^aeiou]+)(y.+)/);
    if (yMatch) {
      return yMatch[2] + yMatch[1] + "ay";
    }

    const consonantMatch = word.match(/^([^aeiou]+)(.+)/);
    if (consonantMatch) {
      return consonantMatch[2] + consonantMatch[1] + "ay";
    }

    return word + "ay";
  };

  return text
    .split(" ")
    .map(translateWord)
    .join(" ");
};