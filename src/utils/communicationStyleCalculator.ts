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
  primaryStyle: string; // Now can be multiple styles
  primaryStyles: ('Direct' | 'Dynamic' | 'Diplomatic' | 'Deliberate')[]; // Array of tied styles
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
  isTie: boolean;
}

export const calculateCommunicationStyle = (answers: Record<number, string>, questions: any[]): StyleResult => {
  const scores = {
    Direct: 0,
    Dynamic: 0,
    Diplomatic: 0,
    Deliberate: 0
  };

  console.log('=== COMMUNICATION STYLE CALCULATION START ===');
  console.log('Raw answers:', answers);
  console.log('Questions available:', questions?.length);

  // Calculate scores based on answers
  Object.entries(answers).forEach(([questionNum, answerText]) => {
    const questionIndex = parseInt(questionNum);
    const questionNumber = questionIndex + 1;
    const answerKey = communicationStyleAnswerKey[questionNumber];
    
    console.log(`\n--- Processing Question ${questionNumber} ---`);
    console.log('Answer text:', answerText);
    console.log('Answer key for this question:', answerKey);

    if (answerKey && answerText && questions[questionIndex]) {
      const currentQuestion = questions[questionIndex];
      const choices = currentQuestion.choices;
      
      console.log('Available choices:', choices);
      
      const choiceIndex = choices.indexOf(answerText);
      console.log('Choice index found:', choiceIndex);
      
      if (choiceIndex !== -1) {
        const answerLetter = String.fromCharCode(97 + choiceIndex);
        console.log('Answer letter:', answerLetter);
        
        const style = answerKey[answerLetter];
        console.log('Mapped style:', style);
        
        if (style && scores.hasOwnProperty(style)) {
          scores[style as keyof typeof scores]++;
          console.log(`✅ Incremented ${style} score. New score:`, scores[style as keyof typeof scores]);
        } else {
          console.log('❌ Could not map to valid style');
        }
      } else {
        console.log('❌ Choice not found in available choices');
      }
    } else {
      console.log('❌ Missing data - answerKey:', !!answerKey, 'answerText:', !!answerText, 'question:', !!questions[questionIndex]);
    }
  });

  console.log('\n=== FINAL SCORES ===');
  console.log('Direct:', scores.Direct);
  console.log('Dynamic:', scores.Dynamic);
  console.log('Diplomatic:', scores.Diplomatic);
  console.log('Deliberate:', scores.Deliberate);

  const totalAnswers = Object.keys(answers).length;
  const percentage = {
    Direct: totalAnswers > 0 ? (scores.Direct / totalAnswers) * 100 : 0,
    Dynamic: totalAnswers > 0 ? (scores.Dynamic / totalAnswers) * 100 : 0,
    Diplomatic: totalAnswers > 0 ? (scores.Diplomatic / totalAnswers) * 100 : 0,
    Deliberate: totalAnswers > 0 ? (scores.Deliberate / totalAnswers) * 100 : 0,
  };

  console.log('\n=== PERCENTAGES ===');
  console.log('Direct:', percentage.Direct.toFixed(1) + '%');
  console.log('Dynamic:', percentage.Dynamic.toFixed(1) + '%');
  console.log('Diplomatic:', percentage.Diplomatic.toFixed(1) + '%');
  console.log('Deliberate:', percentage.Deliberate.toFixed(1) + '%');

  // Find all styles that have the maximum score
  const maxScore = Math.max(...Object.values(scores));
  const primaryStyles = (Object.keys(scores) as Array<keyof typeof scores>).filter(
    style => scores[style] === maxScore
  );

  const isTie = primaryStyles.length > 1;
  const primaryStyle = isTie ? primaryStyles.join(' & ') : primaryStyles[0];

  console.log('\n=== PRIMARY STYLE(S) ===');
  console.log('Primary Styles:', primaryStyles);
  console.log('Is Tie:', isTie);
  console.log('Primary Style Display:', primaryStyle);
  console.log('=== CALCULATION COMPLETE ===\n');

  return {
    primaryStyle,
    primaryStyles,
    scores,
    percentage,
    isTie
  };
};