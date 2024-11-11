const countWordOccurrences = (sentence: string, word: string): number => {
  const lowerSentence = sentence.toLowerCase();
  const lowerWord = word.toLowerCase();

  const words = lowerSentence.split(" ");

  const repeatingNumber = words.filter((word) => word === lowerWord).length;

  return repeatingNumber;
};
