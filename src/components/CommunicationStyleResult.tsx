import { FC, useState } from 'react';
import { useQuiz } from '../context/QuizContext';
import { styleDescriptions } from '../data/styleDescriptions';
import { calculateCommunicationStyle, communicationStyleAnswerKey } from '../utils/communicationStyleCalculator';
import { convertSeconds } from '../utils/helpers';
import Button from './ui/Button';

const CommunicationStyleResult: FC = () => {
  const { userAnswers, endTime, questions } = useQuiz();
  const [showAllStyles, setShowAllStyles] = useState(false);

  console.log('Result screen - userAnswers:', userAnswers);
  console.log('Result screen - questions:', questions);

  const result = calculateCommunicationStyle(userAnswers, questions);
  const totalQuestions = Object.keys(userAnswers).length;

  console.log('Calculated result:', result);

  // Handle single or multiple primary styles
  const renderPrimaryStyleBadge = () => {
    if (result.isTie) {
      return (
        <div className="mx-auto mb-8 max-w-4xl">
          <div className="bg-gradient-to-r from-blue-600 to-green-600 inline-block px-8 py-4 text-white text-2xl font-bold rounded-full shadow-lg mb-4">
            Your Communication Styles: {result.primaryStyle}
          </div>
          <p className="text-lg text-gray-600">
            You have a balanced communication profile with multiple dominant styles!
          </p>
        </div>
      );
    } else {
      const primaryStyle = styleDescriptions[result.primaryStyles[0]];
      return (
        <div 
          className="style-badge mx-auto mb-8 inline-block px-8 py-4 text-white text-2xl font-bold rounded-full shadow-lg"
          style={{ backgroundColor: primaryStyle.color }}
        >
          Your Communication Style: {primaryStyle.title}
        </div>
      );
    }
  };

  const renderStyleOverviews = () => {
    if (result.isTie) {
      return (
        <div className="space-y-8">
          {result.primaryStyles.map((style) => {
            const styleInfo = styleDescriptions[style];
            return (
              <div 
                key={style}
                className="max-w-4xl mx-auto p-8 rounded-2xl shadow-lg text-left"
                style={{ 
                  backgroundColor: `${styleInfo.color}15`,
                  borderLeft: `6px solid ${styleInfo.color}`
                }}
              >
                <h2 className="text-3xl font-bold mb-6" style={{ color: styleInfo.color }}>
                  {styleInfo.title} Overview
                </h2>
                <div className="text-lg leading-relaxed whitespace-pre-line">
                  {styleInfo.overview}
                </div>
              </div>
            );
          })}
        </div>
      );
    } else {
      const primaryStyle = styleDescriptions[result.primaryStyles[0]];
      return (
        <div 
          className="max-w-4xl mx-auto p-8 rounded-2xl shadow-lg text-left mb-8"
          style={{ 
            backgroundColor: `${primaryStyle.color}15`,
            borderLeft: `6px solid ${primaryStyle.color}`
          }}
        >
          <h2 className="text-3xl font-bold mb-6" style={{ color: primaryStyle.color }}>
            {primaryStyle.title} Overview
          </h2>
          <div className="text-lg leading-relaxed whitespace-pre-line">
            {primaryStyle.overview}
          </div>
        </div>
      );
    }
  };

  const renderAllStylesOverview = () => {
    if (!showAllStyles) return null;

    return (
      <div className="max-w-6xl mx-auto mt-8">
        <h3 className="text-3xl font-bold mb-8 text-center">All Communication Styles</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {Object.entries(styleDescriptions).map(([styleKey, styleInfo]) => (
            <div 
              key={styleKey}
              className="rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-[1.02]"
              style={{ 
                borderLeft: `6px solid ${styleInfo.color}`,
                backgroundColor: `${styleInfo.color}08`
              }}
            >
              {/* Style Header */}
              <div 
                className="p-6 text-white"
                style={{ backgroundColor: styleInfo.color }}
              >
                <h4 className="text-2xl font-bold mb-2">{styleInfo.title}</h4>
                <div className="flex justify-between items-center">
                  <span className="text-lg opacity-90">
                    Score: {result.scores[styleKey as keyof typeof result.scores]} / {totalQuestions}
                  </span>
                  <span className="text-xl font-bold">
                    {result.percentage[styleKey as keyof typeof result.percentage].toFixed(1)}%
                  </span>
                </div>
              </div>
              
              {/* Style Description */}
              <div className="p-6">
                <div className="text-lg leading-relaxed whitespace-pre-line">
                  {styleInfo.overview}
                </div>
                
                {/* Score Bar */}
                <div className="mt-4">
                  <div className="flex justify-between text-sm font-semibold mb-2">
                    <span>Style Match</span>
                    <span>{result.percentage[styleKey as keyof typeof result.percentage].toFixed(1)}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className="h-3 rounded-full transition-all duration-1000 ease-out"
                      style={{ 
                        width: `${result.percentage[styleKey as keyof typeof result.percentage]}%`,
                        backgroundColor: styleInfo.color
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderUserAnswers = () => {
    if (!showAllStyles) return null;

    return (
      <div className="max-w-4xl mx-auto mt-12 p-6 bg-white rounded-2xl shadow-lg">
        <h3 className="text-2xl font-bold mb-6 text-center">Your Answer Breakdown</h3>
        <div className="space-y-4 max-h-96 overflow-y-auto">
          {Object.entries(userAnswers).map(([questionIndex, answer]) => {
            const index = parseInt(questionIndex);
            const question = questions[index];
            const questionNumber = index + 1;
            
            // Calculate the style for this specific answer
            const answerKey = communicationStyleAnswerKey[questionNumber];
            let answerStyle = 'Unknown';
            if (answerKey && question) {
              const choiceIndex = question.choices.indexOf(answer);
              if (choiceIndex !== -1) {
                const answerLetter = String.fromCharCode(97 + choiceIndex);
                answerStyle = answerKey[answerLetter] || 'Unknown';
              }
            }

            const styleInfo = styleDescriptions[answerStyle as keyof typeof styleDescriptions];

            return (
              <div key={questionIndex} className="border-b border-gray-200 pb-4 last:border-b-0">
                <div className="flex items-start gap-4">
                  <div 
                    className="flex-shrink-0 w-8 h-8 text-white rounded-full flex items-center justify-center font-bold"
                    style={{ backgroundColor: styleInfo?.color || '#6b7280' }}
                  >
                    {questionNumber}
                  </div>
                  <div className="flex-grow">
                    <p className="font-semibold text-lg mb-2">{question?.question}</p>
                    <div className="flex justify-between items-center">
                      <p className="text-gray-700">{answer}</p>
                      <span 
                        className="px-3 py-1 rounded-full text-sm font-semibold text-white"
                        style={{ 
                          backgroundColor: styleInfo?.color || '#6b7280'
                        }}
                      >
                        {answerStyle}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="text-center">
      {/* Primary Style Badge */}
      {renderPrimaryStyleBadge()}

      {/* Basic Stats */}
      <div className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="text-3xl font-bold text-gray-800">{totalQuestions}</div>
          <div className="text-gray-600">Questions Answered</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="text-3xl font-bold text-gray-800">
            {convertSeconds(endTime)}
          </div>
          <div className="text-gray-600">Time Taken</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="text-3xl font-bold text-gray-800">
            {result.isTie ? 'Multiple' : result.percentage[result.primaryStyles[0]].toFixed(0)}%
          </div>
          <div className="text-gray-600">{result.isTie ? 'Styles' : 'Match'}</div>
        </div>
      </div>

      {/* Style Overview(s) */}
      {renderStyleOverviews()}

      {/* All Style Scores - Compact Version */}
      <div className="max-w-2xl mx-auto mb-8">
        <h3 className="text-2xl font-bold mb-6">Your Style Breakdown</h3>
        <div className="space-y-4">
          {Object.entries(result.percentage).map(([style, percentage]) => (
            <div key={style} className="bg-white p-4 rounded-lg shadow">
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold" style={{ color: styleDescriptions[style as keyof typeof styleDescriptions].color }}>
                  {style}
                </span>
                <span className="font-bold">{percentage.toFixed(1)}% ({result.scores[style as keyof typeof result.scores]})</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div 
                  className="h-3 rounded-full transition-all duration-500"
                  style={{ 
                    width: `${percentage}%`,
                    backgroundColor: styleDescriptions[style as keyof typeof styleDescriptions].color
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* View All Styles Button */}
      <div className="mb-8">
        <Button
          text={showAllStyles ? "Hide All Communication Styles" : "View All Communication Styles"}
          onClick={() => setShowAllStyles(!showAllStyles)}
          outline={!showAllStyles}
          bold
          big
        />
      </div>

      {/* All Styles Overview */}
      {renderAllStylesOverview()}

      {/* User Answers Breakdown */}
      {renderUserAnswers()}
    </div>
  );
};

export default CommunicationStyleResult;