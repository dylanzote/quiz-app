import { FC, ReactNode } from 'react'

interface CenterCardContainerProps {
  children: ReactNode;
  className?: string;
}

const CenterCardContainer: FC<CenterCardContainerProps> = ({ children, className = '' }) => {
  return (
    <div className={`bg-card-bg card-hover flex min-h-[620px] min-w-full flex-col items-center justify-center rounded-2xl px-6 pt-12 pb-16 shadow-card border border-border md:min-w-[773px] ${className}`}>
      {children}
    </div>
  )
}

export default CenterCardContainer