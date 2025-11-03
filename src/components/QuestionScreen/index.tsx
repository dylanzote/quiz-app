import { FC, useEffect, useState } from 'react';
import { useQuiz } from '../../context/QuizContext';
import { useTimer } from '../../hooks';
import { ScreenTypes } from '../../types';
import Button from '../ui/Button';
import ModalWrapper from '../ui/ModalWrapper';
import PageCenter from '../ui/PageCenter';
import Question from './Question';
import QuizHeader from './QuizHeader';
import { CheckIcon, ClickStyleLogo, Next, TimerIcon } from '../../config/icons';

const QuestionScreen: FC = () => {
  const [activeQuestion, setActiveQuestion] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');
  const [showTimerModal, setShowTimerModal] = useState<boolean>(false);
  const [showResultModal, setShowResultModal] = useState<boolean>(false);

  const {
    questions,
    quizDetails,
    setCurrentScreen,
    timer,
    setTimer,
    setEndTime,
    setAnswer,
    userAnswers,
  } = useQuiz();

  const currentQuestion = questions[activeQuestion];
  
  // If no current question, show error or redirect
  if (!currentQuestion) {
    console.error('No current question found');
    return <div>Error: No question found</div>;
  }

  const { question, choices } = currentQuestion;

  const onClickNext = () => {
    // Save the answer
    setAnswer(activeQuestion, selectedAnswer);

    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
      setSelectedAnswer('');
    } else {
      const timeTaken = quizDetails.totalTime - timer;
      setEndTime(timeTaken);
      setShowResultModal(true);
    }
  };

  const handleAnswerSelection = (e: React.ChangeEvent<HTMLInputElement>) => {
    // The value contains the full choice text
    setSelectedAnswer(e.target.value);
  };

  const handleModal = () => {
    setCurrentScreen(ScreenTypes.ResultScreen);
    document.body.style.overflow = 'auto';
  };

  // Pre-select answer if user already answered this question
  useEffect(() => {
    const previousAnswer = userAnswers[activeQuestion];
    if (previousAnswer) {
      setSelectedAnswer(previousAnswer);
    } else {
      setSelectedAnswer(''); // Reset if no previous answer
    }
  }, [activeQuestion, userAnswers]);

  // to prevent scrolling when modal is opened
  useEffect(() => {
    if (showTimerModal || showResultModal) {
      document.body.style.overflow = 'hidden';
    }
  }, [showTimerModal, showResultModal]);

  // timer hooks, handle conditions related to time
  useTimer(timer, quizDetails, setEndTime, setTimer, setShowTimerModal, showResultModal);

  return (
    <PageCenter>
      <div className="text-app-logo mt-3 mb-5 text-center md:my-12">
        <div className="logo-container mt-3 mb-5 text-center md:my-12">
          <img 
            src={ClickStyleLogo} 
            alt="Click Style Profile" 
            className="mx-auto max-w-[200px] md:max-w-[250px] h-auto"
          />
        </div>
      </div>
      <div className="bg-card-bg relative mb-18 min-h-[500px] w-full rounded-sm p-4 pb-20 md:w-[900px] md:px-14 md:pt-8">
        <QuizHeader
          activeQuestion={activeQuestion}
          totalQuestions={quizDetails.totalQuestions}
          timer={timer}
        />
        <Question
          question={question}
          choices={choices}
          type="MCQs"
          handleAnswerSelection={handleAnswerSelection}
          selectedAnswer={selectedAnswer}
        />
        <div className="absolute right-4 bottom-8 flex w-[90%] justify-end gap-5 md:right-15 md:w-auto md:justify-normal">
          <Button
            text={activeQuestion === questions.length - 1 ? 'Finish' : 'Next'}
            onClick={onClickNext}
            icon={<Next />}
            iconPosition="right"
            disabled={!selectedAnswer}
          />
        </div>
      </div>

      {/* timer or finish quiz modal*/}
      {(showTimerModal || showResultModal) && (
        <ModalWrapper
          title={showResultModal ? 'Done!' : 'Your time is up!'}
          subtitle={`You have completed ${Object.keys(userAnswers).length} questions.`}
          onClick={handleModal}
          icon={showResultModal ? <CheckIcon /> : <TimerIcon />}
          buttonTitle="SHOW RESULTS"
        />
      )}
    </PageCenter>
  );
};

export default QuestionScreen;