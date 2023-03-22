import { Media, ResultSet, ResultSetAugmented } from "../types";

export const countLetters = (str: string) => {
  const letters = new Map<string, number>();
  const lowercaseStr = str.toLowerCase();
  for (const letter of lowercaseStr) {
    const count = letters.get(letter) || 0;
    letters.set(letter, count + 1);
  }
  return new Map([...letters.entries()].sort((a, b) => b[1] - a[1]));
};

export const augmentResults = (data: ResultSet): ResultSetAugmented => {
  const responseWithBiggerPicture = data.results.map((el: Media) => {
    return {
      ...el,
      artworkUrl256: el.artworkUrl100.replace("100x100bb", "512x512bb"),
    };
  });
  return {
    resultCount: data.resultCount,
    results: responseWithBiggerPicture,
  };
};
