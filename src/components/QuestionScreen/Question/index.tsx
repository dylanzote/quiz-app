import { FC } from 'react';
import Answer from '../Answer';

interface QuestionTypes {
  question: string;
  type: string;
  choices: string[];
  selectedAnswer: string;
  handleAnswerSelection: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Question: FC<QuestionTypes> = ({
  question,
  choices,
  selectedAnswer,
  handleAnswerSelection,
}) => {
  return (
    <div className="mt-8 mb-10 max-w-full md:max-w-[88%]">
      <h2 className="text-primary-text mb-6 text-[18px] leading-[1.3] font-medium sm:text-[20px] md:text-[24px] lg:text-[26px] xl:text-[28px]">
        {question}
      </h2>
      <div className="max-w-full md:max-w-[78%]">
        {choices.map((choice, index) => (
          <Answer
            choice={choice}
            index={index}
            key={index}
            onChange={handleAnswerSelection}
            selectedAnswer={selectedAnswer}
          />
        ))}
      </div>
    </div>
  );
};

export default Question;