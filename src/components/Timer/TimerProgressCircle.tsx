import './TimerProgressCircle.scss'
import type React from 'react'

interface Props {
  total: number
  progress: number
  className?: string
  children?: React.ReactNode
}

export const TimerProgressCircle: React.FC<Props> = ({ total, progress, className = '', children }) => {
  const progressClasses = `timer-progress ${className}`.trim()
  return (
    <svg
      className={progressClasses}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ '--total': total, '--progress': progress } as React.CSSProperties}
    >
      <circle className="timer-progress-circle" />
      {children}
    </svg>
  )
}
