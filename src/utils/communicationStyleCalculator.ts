// // Complete answer key based on your document - mapping question numbers to answer styles
// export const communicationStyleAnswerKey: Record<number, Record<string, string>> = {
//   1: { 'a': 'Dynamic', 'b': 'Deliberate', 'c': 'Diplomatic', 'd': 'Direct' },
//   2: { 'a': 'Deliberate', 'b': 'Diplomatic', 'c': 'Direct', 'd': 'Dynamic' },
//   3: { 'a': 'Direct', 'b': 'Deliberate', 'c': 'Dynamic', 'd': 'Diplomatic' },
//   4: { 'a': 'Deliberate', 'b': 'Dynamic', 'c': 'Diplomatic', 'd': 'Direct' },
//   5: { 'a': 'Dynamic', 'b': 'Deliberate', 'c': 'Direct', 'd': 'Diplomatic' },
//   6: { 'a': 'Dynamic', 'b': 'Deliberate', 'c': 'Direct', 'd': 'Diplomatic' },
//   7: { 'a': 'Deliberate', 'b': 'Diplomatic', 'c': 'Direct', 'd': 'Dynamic' },
//   8: { 'a': 'Diplomatic', 'b': 'Direct', 'c': 'Dynamic', 'd': 'Deliberate' },
//   9: { 'a': 'Diplomatic', 'b': 'Direct', 'c': 'Dynamic', 'd': 'Deliberate' },
//   10: { 'a': 'Diplomatic', 'b': 'Direct', 'c': 'Deliberate', 'd': 'Dynamic' },
//   11: { 'a': 'Diplomatic', 'b': 'Direct', 'c': 'Dynamic', 'd': 'Deliberate' },
//   12: { 'a': 'Deliberate', 'b': 'Dynamic', 'c': 'Direct', 'd': 'Diplomatic' },
//   13: { 'a': 'Direct', 'b': 'Deliberate', 'c': 'Diplomatic', 'd': 'Dynamic' },
//   14: { 'a': 'Diplomatic', 'b': 'Direct', 'c': 'Deliberate', 'd': 'Dynamic' },
//   15: { 'a': 'Direct', 'b': 'Deliberate', 'c': 'Dynamic', 'd': 'Diplomatic' },
//   16: { 'a': 'Diplomatic', 'b': 'Dynamic', 'c': 'Direct', 'd': 'Deliberate' },
//   17: { 'a': 'Deliberate', 'b': 'Direct', 'c': 'Diplomatic', 'd': 'Dynamic' },
//   18: { 'a': 'Diplomatic', 'b': 'Deliberate', 'c': 'Direct', 'd': 'Dynamic' },
//   19: { 'a': 'Dynamic', 'b': 'Direct', 'c': 'Deliberate', 'd': 'Diplomatic' },
//   20: { 'a': 'Dynamic', 'b': 'Diplomatic', 'c': 'Deliberate', 'd': 'Direct' },
//   21: { 'a': 'Diplomatic', 'b': 'Direct', 'c': 'Deliberate', 'd': 'Dynamic' },
//   22: { 'a': 'Deliberate', 'b': 'Dynamic', 'c': 'Direct', 'd': 'Diplomatic' },
//   23: { 'a': 'Diplomatic', 'b': 'Direct', 'c': 'Dynamic', 'd': 'Deliberate' },
//   24: { 'a': 'Direct', 'b': 'Deliberate', 'c': 'Diplomatic', 'd': 'Dynamic' },
// };

// export interface StyleResult {
//   primaryStyle: 'Direct' | 'Dynamic' | 'Diplomatic' | 'Deliberate';
//   scores: {
//     Direct: number;
//     Dynamic: number;
//     Diplomatic: number;
//     Deliberate: number;
//   };
//   percentage: {
//     Direct: number;
//     Dynamic: number;
//     Diplomatic: number;
//     Deliberate: number;
//   };
// }

// export const calculateCommunicationStyle = (answers: Record<number, string>): StyleResult => {
//   const scores = {
//     Direct: 0,
//     Dynamic: 0,
//     Diplomatic: 0,
//     Deliberate: 0
//   };

//   // Calculate scores based on answers
//   Object.entries(answers).forEach(([questionNum, answer]) => {
//     const questionIndex = parseInt(questionNum);
//     const answerKey = communicationStyleAnswerKey[questionIndex];
    
//     if (answerKey && answer) {
//       // Extract the letter from the answer (e.g., "a" from "Begin by asking...")
//       const answerLetter = String.fromCharCode(65 + answer.indexOf(answer));
//       const style = answerKey[answerLetter.toLowerCase()];
//       if (style && scores.hasOwnProperty(style)) {
//         scores[style as keyof typeof scores]++;
//       }
//     }
//   });

//   const totalAnswers = Object.keys(answers).length;
//   const percentage = {
//     Direct: totalAnswers > 0 ? (scores.Direct / totalAnswers) * 100 : 0,
//     Dynamic: totalAnswers > 0 ? (scores.Dynamic / totalAnswers) * 100 : 0,
//     Diplomatic: totalAnswers > 0 ? (scores.Diplomatic / totalAnswers) * 100 : 0,
//     Deliberate: totalAnswers > 0 ? (scores.Deliberate / totalAnswers) * 100 : 0,
//   };

//   const primaryStyle = Object.keys(scores).reduce((a, b) => 
//     scores[a as keyof typeof scores] > scores[b as keyof typeof scores] ? a : b
//   ) as keyof typeof scores;

//   return {
//     primaryStyle,
//     scores,
//     percentage
//   };
// };

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
    const questionIndex = parseInt(questionNum); // This is 0-based index
    const questionNumber = questionIndex + 1; // Convert to 1-based for answer key
    const answerKey = communicationStyleAnswerKey[questionNumber];
    
    console.log(`\n--- Processing Question ${questionNumber} ---`);
    console.log('Answer text:', answerText);
    console.log('Answer key for this question:', answerKey);

    if (answerKey && answerText && questions[questionIndex]) {
      const currentQuestion = questions[questionIndex];
      const choices = currentQuestion.choices;
      
      console.log('Available choices:', choices);
      
      // Find which choice index this answer corresponds to
      const choiceIndex = choices.indexOf(answerText);
      console.log('Choice index found:', choiceIndex);
      
      if (choiceIndex !== -1) {
        // Convert index to letter (0 = 'a', 1 = 'b', etc.)
        const answerLetter = String.fromCharCode(97 + choiceIndex); // 97 is 'a' in ASCII
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

  // Find primary style (handle ties by using the first one)
  const primaryStyle = Object.keys(scores).reduce((a, b) => {
    if (scores[a as keyof typeof scores] > scores[b as keyof typeof scores]) {
      return a;
    } else if (scores[a as keyof typeof scores] < scores[b as keyof typeof scores]) {
      return b;
    } else {
      // If tied, use the order: Direct > Dynamic > Diplomatic > Deliberate
      const order = ['Direct', 'Dynamic', 'Diplomatic', 'Deliberate'];
      return order.indexOf(a) < order.indexOf(b) ? a : b;
    }
  }) as keyof typeof scores;

  console.log('\n=== PRIMARY STYLE ===');
  console.log('Primary Style:', primaryStyle);
  console.log('=== CALCULATION COMPLETE ===\n');

  return {
    primaryStyle,
    scores,
    percentage
  };
};


// Test function to verify the calculation
export const testCommunicationStyleCalculation = () => {
  // Sample answers that should result in Dynamic style
  const testAnswers: Record<number, string> = {
    0: "Kick things off with a story or anecdote.", // Q1 - d: Direct (but let's test with Dynamic answers)
    1: "Try to lighten the moment with humor or optimism.", // Q2 - c: Direct
    2: "Add energy through my voice and body language to keep the group engaged and entertained.", // Q3 - c: Dynamic
    3: "Step in energetically, often narrowing the space.", // Q4 - b: Dynamic
    4: "Energetic and engaging, keeping people's attention throughout.", // Q5 - d: Diplomatic (should be Dynamic based on pattern)
  };

  const testQuestions = [
    {
      choices: [
        "Begin by asking how the other person is doing.",
        "Open by clarifying the purpose of the conversation.",
        "Get straight to the subject right away.",
        "Kick things off with a story or anecdote."
      ]
    },
    {
      choices: [
        "Try to refocus the situation and keep things on track.",
        "Offer empathy and listen with care.",
        "Try to lighten the moment with humor or optimism.",
        "Step back and give them space until they're ready to continue."
      ]
    },
    {
      choices: [
        "Emphasize the people and their personal experiences.",
        "Add energy through my voice and body language to keep the group engaged and entertained.",
        "Lay it out step by step to build a clear case.",
        "Skip extra details and get straight to the point."
      ]
    },
    {
      choices: [
        "Position myself close, showing confidence.",
        "Step in energetically, often narrowing the space.",
        "Find a middle ground that feels friendly but respectful.",
        "Step back to maintain a clear buffer of personal space."
      ]
    },
    {
      choices: [
        "Structured and methodical, with a clear flow of information.",
        "Relational and people-focused, aiming to connect with the audience's feelings.",
        "Assertive and confident, with a strong delivery.",
        "Energetic and engaging, keeping people's attention throughout."
      ]
    }
  ];

  console.log('=== TESTING CALCULATION WITH DYNAMIC ANSWERS ===');
  const result = calculateCommunicationStyle(testAnswers, testQuestions);
  return result;
};