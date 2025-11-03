// import { AppLogo, StartIcon } from '../../config/icons';
// import { useQuiz } from '../../context/QuizContext';
// import { ScreenTypes } from '../../types';
// import { convertSeconds } from '../../utils/helpers';
// import Button from '../ui/Button';
// import CenterCardContainer from '../ui/CenterCardContainer';
// import HighlightedText from '../ui/HighlightedText';
// import PageCenter from '../ui/PageCenter';

// const QuizDetailsScreen = () => {
//   const { setCurrentScreen, quizDetails } = useQuiz();

//   const { totalQuestions, totalTime } = quizDetails;

//   const goToQuestionScreen = () => {
//     setCurrentScreen(ScreenTypes.QuestionScreen);
//   };

//   return (
//     <PageCenter light justifyCenter>
//       <CenterCardContainer>
//         <div className="text-app-logo mb-8 text-center md:mb-12">
//           <AppLogo width={220} />
//         </div>
//         <h2 className="text-theme-color text-3xl font-bold">COMMUNICATION STYLE ASSESSMENT</h2>

//         <div className="mt-8 mb-12 max-w-[500px] text-center text-xl font-medium">
//           <p className="text-5 mt-6 leading-[1.3] font-medium">
//             Total questions: <HighlightedText>{totalQuestions}</HighlightedText>
//           </p>
//           <p className="text-5 mt-6 leading-[1.3] font-medium">
//             Estimated time: <HighlightedText>{convertSeconds(totalTime)}</HighlightedText>
//           </p>
//           <p className="text-5 mt-6 leading-[1.3] font-medium text-gray-600">
//             Answer honestly to get the most accurate results. There are no right or wrong answers.
//           </p>
//         </div>

//         <Button
//           text="Begin Assessment"
//           icon={<StartIcon />}
//           iconPosition="left"
//           onClick={goToQuestionScreen}
//           bold
//           big
//         />
//       </CenterCardContainer>
//     </PageCenter>
//   );
// };

// export default QuizDetailsScreen;

import { ClickStyleLogo, StartIcon } from '../../config/icons'
import { useQuiz } from '../../context/QuizContext'
import { ScreenTypes } from '../../types'
import { convertSeconds } from '../../utils/helpers'
import Button from '../ui/Button'
import CenterCardContainer from '../ui/CenterCardContainer'
import HighlightedText from '../ui/HighlightedText'
import PageCenter from '../ui/PageCenter'

const QuizDetailsScreen = () => {
  const { setCurrentScreen, quizDetails } = useQuiz()

  const { totalQuestions, totalTime } = quizDetails

  const goToQuestionScreen = () => {
    setCurrentScreen(ScreenTypes.QuestionScreen)
  }

  return (
    <PageCenter light justifyCenter>
      <CenterCardContainer>
        <div className="logo-container mb-8 text-center md:mb-12">
          <img 
            src={ClickStyleLogo} 
            alt="Click Style Profile" 
            className="mx-auto max-w-[250px] md:max-w-[300px] h-auto"
          />
        </div>
        <h2 className="text-theme-color text-4xl font-bold mb-6">CLICK STYLE PROFILE™</h2>

        <div className="mt-8 mb-12 max-w-[500px] text-center">
          <div className="bg-selected-answer rounded-2xl p-6 mb-6 border border-theme-color/20">
            <p className="text-2xl font-semibold mb-2">Assessment Overview</p>
            <p className="text-lg text-secondary-text">
              Get ready to discover your unique communication style
            </p>
          </div>

          <div className="space-y-4 text-left">
            <div className="flex justify-between items-center p-4 bg-white rounded-xl border">
              <span className="font-medium">Total Questions:</span>
              <HighlightedText>{totalQuestions}</HighlightedText>
            </div>
            <div className="flex justify-between items-center p-4 bg-white rounded-xl border">
              <span className="font-medium">Estimated Time:</span>
              <HighlightedText>{convertSeconds(totalTime)}</HighlightedText>
            </div>
            <div className="flex justify-between items-center p-4 bg-white rounded-xl border">
              <span className="font-medium">Assessment Type:</span>
              <HighlightedText>Communication Styles</HighlightedText>
            </div>
          </div>

          <p className="mt-8 text-lg text-secondary-text font-medium">
            Answer honestly to get the most accurate results. There are no right or wrong answers.
          </p>
        </div>

        <Button
          text="Begin Assessment"
          icon={<StartIcon />}
          iconPosition="left"
          onClick={goToQuestionScreen}
          bold
          big
        />
      </CenterCardContainer>
    </PageCenter>
  )
}

export default QuizDetailsScreen