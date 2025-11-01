import { ReactNode } from 'react'
import BulbIcon from '../assets/icons/bulb.svg?react'

type QuizTopic = {
  title: string
  icon: ReactNode
  disabled?: boolean
}

export const quizTopics: QuizTopic[] = [
  {
    title: 'Communication Styles',
    icon: <BulbIcon />,
  },
]
