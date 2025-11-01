import { AppLogo } from '../../config/icons';
import { useQuiz } from '../../context/QuizContext';
import { quizTopics } from '../../data/quizTopics';
import { ScreenTypes } from '../../types';
import cn from 'classnames';
import Button from '../ui/Button';
import CenterCardContainer from '../ui/CenterCardContainer';
import HighlightedText from '../ui/HighlightedText';
import PageCenter from '../ui/PageCenter';

const QuizTopicsScreen: React.FC = () => {
  const { quizTopic, selectQuizTopic, setCurrentScreen } = useQuiz();

  const goToQuizDetailsScreen = () => {
    setCurrentScreen(ScreenTypes.QuizDetailsScreen);
  };

  return (
    <PageCenter light justifyCenter>
      <CenterCardContainer>
        <div className="text-app-logo mb-8 text-center md:mb-12">
          <AppLogo width={220} />
        </div>
        <h2 className="mb-5 text-center text-3xl font-bold">
          DISCOVER YOUR <HighlightedText>COMMUNICATION STYLE</HighlightedText>
        </h2>
        <p className="text-center text-xl leading-7 font-medium">
          Take this assessment to understand your unique communication approach
          and how to leverage your strengths.
        </p>
        <div className="mt-10 mb-11">
          {quizTopics.map(({ title, icon, disabled }) => (
            <div
              key={title}
              onClick={() => !disabled && selectQuizTopic(title)}
              className={cn(
                'flex items-center justify-center rounded-xl p-6 transition-colors duration-500 ease-out [-webkit-tap-highlight-color:_transparent] [tap-highlight-color:_transparent] max-w-md mx-auto',
                disabled
                  ? 'bg-disabled-card cursor-not-allowed'
                  : 'bg-select-topic-bg cursor-pointer hover:shadow-lg',
                quizTopic === title
                  ? `border-theme-color border-2 shadow-lg`
                  : `border-disabled-button border`
              )}
            >
              {icon}
              <span className="ml-4 text-xl font-semibold">
                {title}
              </span>
            </div>
          ))}
        </div>

        <Button 
          text="Start Assessment" 
          onClick={goToQuizDetailsScreen} 
          bold 
          disabled={!quizTopic}
        />
      </CenterCardContainer>
    </PageCenter>
  );
};

export default QuizTopicsScreen;