// import { FC } from 'react'
// import { refreshPage } from '../../utils/helpers'
// import Button from '../ui/Button'
// import Flex from '../ui/Flex'

// import CommunicationStyleResult from '../CommunicationStyleResult'
// import { ClickStyleLogo, Refresh } from '../../config/icons'

// const ResultScreen: FC = () => {
  
//   const onClickRetry = () => {
//     refreshPage()
//   }

//   return (
//     <div className="mx-auto my-8 w-[90%] max-w-[1200px] p-6 md:my-14">
//       <div className="text-app-logo mb-8 text-center">
//         <div className="logo-container mb-8 text-center">
//           <img 
//             src={ClickStyleLogo} 
//             alt="Click Style Profile" 
//             className="mx-auto max-w-[250px] md:max-w-[300px] h-auto"
//           />
//         </div>
//       </div>
      
//       <div className="bg-card-bg mx-auto rounded-xl p-6 md:p-12 shadow-2xl">
//         <CommunicationStyleResult />
//       </div>

//       <Flex flxEnd >
//         <Button
//           text="TAKE TEST AGAIN"
//           onClick={onClickRetry}
//           icon={<Refresh />}
//           iconPosition="left"
//           bold
//           big
//         />
//       </Flex>
//     </div>
//   );
// };

// export default ResultScreen


import { FC } from 'react';
import { ClickStyleLogo, Refresh } from '../../config/icons';
import { useQuiz } from '../../context/QuizContext';
import { refreshPage } from '../../utils/helpers';
import Button from '../ui/Button';
import Flex from '../ui/Flex';
import CommunicationStyleResult from '../CommunicationStyleResult';

const ResultScreen: FC = () => {
  const { quizDetails } = useQuiz();

  const onClickRetry = () => {
    refreshPage();
  };

  return (
    <div className="mx-auto my-8 w-[90%] max-w-[1200px] p-6 md:my-14">
      <div className="logo-container mb-8 text-center">
        <img 
          src={ClickStyleLogo} 
          alt="Click Style Profile" 
          className="mx-auto max-w-[250px] md:max-w-[300px] h-auto"
        />
      </div>
      
      <div className="bg-card-bg mx-auto rounded-xl p-6 md:p-12 shadow-2xl">
        <CommunicationStyleResult />
      </div>

      <Flex flxEnd >
        <Button
          text="TAKE TEST AGAIN"
          onClick={onClickRetry}
          icon={<Refresh />}
          iconPosition="left"
          bold
          big
        />
      </Flex>
    </div>
  );
};

export default ResultScreen;