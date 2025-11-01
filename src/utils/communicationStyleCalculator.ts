// Complete answer key based on your document - mapping question numbers to answer styles
export const communicationStyleAnswerKey: Record<number, Record<string, string>> = {
  1: { 'a': 'Dynamic', 'b': 'Deliberate', 'c': 'Diplomatic', 'd': 'Direct' },
  2: { 'a': 'Deliberate', 'b': 'Diplomatic', 'c': 'Direct', 'd': 'Dynamic' },
  3: { 'a': 'Direct', 'b': 'Deliberate', 'c': 'Dynamic', 'd': 'Diplomatic' },
  4: { 'a': 'Deliberate', 'b': 'Dynamic', 'c': 'Diplomatic', 'd': 'Direct' },
  5: { 'a': 'Dynamic', 'b': 'Deliberate', 'c': 'Direct', 'd': 'Diplomatic' },
  6: { 'a': 'Dynamic', 'b': 'Deliberate', 'c': 'Direct', 'd': 'Diplomatic' },
  7: { 'a': 'Deliberate', 'b': 'Diplomatic', 'c': 'Direct', 'd': 'Dynamic' },
  8: { 'a': 'Diplomatic', 'b': 'Direct', 'c': 'Dynamic', 'd': 'Deliberate' },
  9: { 'a': 'Diplomatic', 'b': 'Direct', 'c': 'Dynamic', 'd': 'Deliberate' },
  10: { 'a': 'Diplomatic', 'b': 'Direct', 'c': 'Deliberate', 'd': 'Dynamic' },
  11: { 'a': 'Diplomatic', 'b': 'Direct', 'c': 'Dynamic', 'd': 'Deliberate' },
  12: { 'a': 'Deliberate', 'b': 'Dynamic', 'c': 'Direct', 'd': 'Diplomatic' },
  13: { 'a': 'Direct', 'b': 'Deliberate', 'c': 'Diplomatic', 'd': 'Dynamic' },
  14: { 'a': 'Diplomatic', 'b': 'Direct', 'c': 'Deliberate', 'd': 'Dynamic' },
  15: { 'a': 'Direct', 'b': 'Deliberate', 'c': 'Dynamic', 'd': 'Diplomatic' },
  16: { 'a': 'Diplomatic', 'b': 'Dynamic', 'c': 'Direct', 'd': 'Deliberate' },
  17: { 'a': 'Deliberate', 'b': 'Direct', 'c': 'Diplomatic', 'd': 'Dynamic' },
  18: { 'a': 'Diplomatic', 'b': 'Deliberate', 'c': 'Direct', 'd': 'Dynamic' },
  19: { 'a': 'Dynamic', 'b': 'Direct', 'c': 'Deliberate', 'd': 'Diplomatic' },
  20: { 'a': 'Dynamic', 'b': 'Diplomatic', 'c': 'Deliberate', 'd': 'Direct' },
  21: { 'a': 'Diplomatic', 'b': 'Direct', 'c': 'Deliberate', 'd': 'Dynamic' },
  22: { 'a': 'Deliberate', 'b': 'Dynamic', 'c': 'Direct', 'd': 'Diplomatic' },
  23: { 'a': 'Diplomatic', 'b': 'Direct', 'c': 'Dynamic', 'd': 'Deliberate' },
  24: { 'a': 'Direct', 'b': 'Deliberate', 'c': 'Diplomatic', 'd': 'Dynamic' },
};

export interface StyleResult {
  primaryStyle: 'Direct' | 'Dynamic' | 'Diplomatic' | 'Deliberate';
  scores: {
    Direct: number;
    Dynamic: number;
    Diplomatic: number;
    Deliberate: number;
  };
  percentage: {
    Direct: number;
    Dynamic: number;
    Diplomatic: number;
    Deliberate: number;
  };
}

export const calculateCommunicationStyle = (answers: Record<number, string>): StyleResult => {
  const scores = {
    Direct: 0,
    Dynamic: 0,
    Diplomatic: 0,
    Deliberate: 0
  };

  // Calculate scores based on answers
  Object.entries(answers).forEach(([questionNum, answer]) => {
    const questionIndex = parseInt(questionNum);
    const answerKey = communicationStyleAnswerKey[questionIndex];
    
    if (answerKey && answer) {
      // Extract the letter from the answer (e.g., "a" from "Begin by asking...")
      const answerLetter = String.fromCharCode(65 + answer.indexOf(answer));
      const style = answerKey[answerLetter.toLowerCase()];
      if (style && scores.hasOwnProperty(style)) {
        scores[style as keyof typeof scores]++;
      }
    }
  });

  const totalAnswers = Object.keys(answers).length;
  const percentage = {
    Direct: totalAnswers > 0 ? (scores.Direct / totalAnswers) * 100 : 0,
    Dynamic: totalAnswers > 0 ? (scores.Dynamic / totalAnswers) * 100 : 0,
    Diplomatic: totalAnswers > 0 ? (scores.Diplomatic / totalAnswers) * 100 : 0,
    Deliberate: totalAnswers > 0 ? (scores.Deliberate / totalAnswers) * 100 : 0,
  };

  const primaryStyle = Object.keys(scores).reduce((a, b) => 
    scores[a as keyof typeof scores] > scores[b as keyof typeof scores] ? a : b
  ) as keyof typeof scores;

  return {
    primaryStyle,
    scores,
    percentage
  };
};