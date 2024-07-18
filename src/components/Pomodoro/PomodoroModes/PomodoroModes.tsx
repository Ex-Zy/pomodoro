import './PomodoroModes.scss'
import { clsx } from 'clsx'
import { motion } from 'framer-motion'
import type React from 'react'

import { Modes } from '../../../types/common.ts'

interface Props {
  mode: Modes
  pomodorosUntilLongBreak: number
  pomodoroSessionCount: number
  onClick: (mode: Modes) => void
}

function normalizeModeValue(mode: Modes) {
  return mode
    .split(/(?=[A-Z])/)
    .join(' ')
    .toLowerCase()
}

export const PomodoroModes: React.FC<Props> = ({
  mode,
  pomodoroSessionCount,
  pomodorosUntilLongBreak,
  onClick,
}: Props) => {
  const modes = [Modes.Pomodoro, Modes.ShortBreak, Modes.LongBreak]
  return (
    <>
      <motion.div
        className="pomodoro-modes pomodoro-modes--margin"
        initial={{ y: 20, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: {
            delay: 0.6,
            duration: 0.3,
          },
        }}
      >
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
      </motion.div>
      <motion.ul
        className="pomodoro-session"
        initial={{ y: -20, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: {
            delay: 0.9,
            duration: 0.3,
          },
        }}
      >
        {[...Array(pomodorosUntilLongBreak).keys()].map((item) => {
          return (
            <li
              key={item}
              className={clsx('pomodoro-session__item', {
                'pomodoro-session__item--active': pomodoroSessionCount === item + 1,
              })}
            ></li>
          )
        })}
      </motion.ul>
    </>
  )
}
