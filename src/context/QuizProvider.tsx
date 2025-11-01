import { ReactNode, useEffect, useState } from 'react'
import { quiz } from '../data/QuizQuestions'
import { QuizContextTypes, Result, ScreenTypes } from '../types'
import { QuizContext, initialState } from './QuizContext'

type QuizProviderProps = {
  children: ReactNode
}

const QuizProvider = ({ children }: QuizProviderProps) => {
  const [timer, setTimer] = useState<number>(initialState.timer)
  const [endTime, setEndTime] = useState<number>(initialState.endTime)
  const [quizTopic, setQuizTopic] = useState<string>(initialState.quizTopic)
  const [result, setResult] = useState<Result[]>(initialState.result)
  const [currentScreen, setCurrentScreen] = useState<ScreenTypes>(
    initialState.currentScreen
  )
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>(initialState.userAnswers)

  // Get the current quiz data safely
  const currentQuiz = quiz[quizTopic]
  
  const [questions, setQuestions] = useState(currentQuiz?.questions || [])
  
  // Safely destructure with fallbacks
  const {
    questions: quizQuestions = [],
    totalQuestions = 0,
    totalTime = 0,
    totalScore = 0,
  } = currentQuiz || {}

  const selectQuizTopic = (topic: string) => {
    setQuizTopic(topic)
  }

  const setAnswer = (questionIndex: number, answer: string) => {
    setUserAnswers(prev => ({
      ...prev,
      [questionIndex]: answer
    }))
  }

  useEffect(() => {
    if (currentQuiz) {
      setTimer(totalTime)
      setQuestions(quizQuestions)
      setUserAnswers({})
    }
  }, [quizTopic, currentQuiz, totalTime, quizQuestions])

  const quizDetails = {
    totalQuestions,
    totalScore,
    totalTime,
    selectedQuizTopic: quizTopic,
  }

  const quizContextValue: QuizContextTypes = {
    currentScreen,
    setCurrentScreen,
    quizTopic,
    selectQuizTopic,
    questions,
    setQuestions,
    result,
    setResult,
    quizDetails,
    timer,
    setTimer,
    endTime,
    setEndTime,
    userAnswers,
    setAnswer,
  }

  return <QuizContext.Provider value={quizContextValue}>{children}</QuizContext.Provider>
}

export default QuizProvider