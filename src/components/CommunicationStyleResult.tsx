import { FC } from 'react';
import { useQuiz } from '../context/QuizContext';
import { styleDescriptions } from '../data/styleDescriptions';
import { calculateCommunicationStyle } from '../utils/communicationStyleCalculator';
import { convertSeconds } from '../utils/helpers';

const CommunicationStyleResult: FC = () => {
  const { userAnswers, quizDetails, endTime } = useQuiz();

  const result = calculateCommunicationStyle(userAnswers);
  const primaryStyle = styleDescriptions[result.primaryStyle];
  const totalQuestions = Object.keys(userAnswers).length;

  return (
    <div className="text-center">
      {/* Primary Style Badge */}
      <div 
        className="style-badge mx-auto mb-8 inline-block px-8 py-4 text-white text-2xl font-bold rounded-full shadow-lg"
        style={{ backgroundColor: primaryStyle.color }}
      >
        Your Communication Style: {primaryStyle.title}
      </div>

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
            {result.percentage[result.primaryStyle].toFixed(0)}%
          </div>
          <div className="text-gray-600">{result.primaryStyle} Match</div>
        </div>
      </div>

      {/* Style Overview */}
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

      {/* All Style Scores */}
      <div className="max-w-2xl mx-auto">
        <h3 className="text-2xl font-bold mb-6">Your Style Breakdown</h3>
        <div className="space-y-4">
          {Object.entries(result.percentage).map(([style, percentage]) => (
            <div key={style} className="bg-white p-4 rounded-lg shadow">
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold" style={{ color: styleDescriptions[style as keyof typeof styleDescriptions].color }}>
                  {style}
                </span>
                <span className="font-bold">{percentage.toFixed(1)}%</span>
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
    </div>
  );
};

// Make sure this default export exists
export default CommunicationStyleResult;