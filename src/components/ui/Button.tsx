import cn from 'classnames'
import { FC, ReactNode } from 'react'

interface ButtonTypes {
  text: string
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
  outline?: boolean
  secondary?: boolean // New prop for secondary button
  bold?: boolean
  big?: boolean
  disabled?: boolean
}

const Button: FC<ButtonTypes> = ({
  text,
  onClick,
  icon,
  iconPosition,
  outline,
  secondary,
  bold,
  big,
  disabled,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        'active:shadow-active-button disabled:bg-disabled-button disabled:text-dark-grey flex min-h-[50px] cursor-pointer items-center justify-center gap-4 rounded-xl text-[16px] font-semibold active:scale-[0.98] active:transition-all active:duration-200 disabled:transform-[unset] disabled:cursor-not-allowed disabled:shadow-none sm:text-[18px] md:min-h-[60px] md:text-[20px]',
        outline
          ? 'text-outline-button-text bg-card-bg border-theme-color border-2'
          : secondary
          ? 'text-button-text secondary-button-background border-none'
          : 'text-button-text not-disabled:button-background border-none',
        bold ? 'font-bold' : 'font-semibold',
        big ? 'w-[200px] md:w-[250px]' : 'w-[160px] md:w-[200px]',
      )}
    >
      {icon && iconPosition === 'left' && icon}
      {text}
      {icon && iconPosition === 'right' && icon}
    </button>
  )
}

export default Button