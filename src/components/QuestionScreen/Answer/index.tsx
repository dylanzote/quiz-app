import cn from 'classnames';
import { FC } from 'react';

interface AnswerProps {
  index: number;
  choice: string;
  selectedAnswer: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Answer: FC<AnswerProps> = ({ onChange, index, choice, selectedAnswer }) => {
  // Convert index to alphabet character to show ABCD before question
  const label = String.fromCharCode(65 + index);

  // Create a unique identifier for this answer
  const answerId = `answer-${index}`;

  return (
    <div
      key={index}
      className={cn(
        'text-secondary-text mt-[13px] cursor-pointer rounded-2xl border text-[16px] font-medium sm:mt-[14px] md:mt-[15px] md:text-[17px] md:font-normal lg:mt-[16px] lg:text-[18px]',
        selectedAnswer === choice
          ? 'border-theme-color bg-selected-answer transition-all duration-200 ease-in'
          : 'border-border bg-answer-bg',
      )}
    >
      <label htmlFor={answerId} className="flex cursor-pointer p-[14px] md:p-[18px]">
        <span className="mr-3 font-bold">{label}.</span>
        <input
          id={answerId}
          name="answer" // Use the same name for all radio buttons in the same question
          type="radio"
          value={choice} // Use the choice text as the value
          checked={selectedAnswer === choice}
          onChange={onChange}
          className="hidden" // Hide the default radio button
        />
        <span>{choice}</span>
      </label>
    </div>
  );
};

export default Answer;