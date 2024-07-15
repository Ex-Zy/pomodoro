import './PomodoroModes.scss'
import type React from 'react'

import { Modes } from '../../../types/common.ts'

interface Props {
  mode: Modes
  onClick: (mode: Modes) => void
}

function normalizeModeValue(mode: Modes) {
  return mode
    .split(/(?=[A-Z])/)
    .join(' ')
    .toLowerCase()
}

export const PomodoroModes: React.FC<Props> = ({ mode, onClick }: Props) => {
  const modes = [Modes.Pomodoro, Modes.ShortBreak, Modes.LongBreak]
  return (
    <div className="pomodoro-modes pomodoro-modes--margin">
      {modes.map((item) => {
        const isActive = mode === item
        const btnClasses = `pomodoro-modes__btn`.concat(isActive ? ' pomodoro-modes__btn--active' : '').trim()

        return (
          <button
            key={item}
            type="button"
            className={btnClasses}
            onClick={() => {
              onClick(item)
            }}
          >
            <span>{normalizeModeValue(item)}</span>
          </button>
        )
      })}
    </div>
  )
}
