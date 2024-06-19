import { UtilsTimer } from './timer.ts'
import type { PomodoroSettings } from '../types/common.ts'

export const DEFAULT_POMODORO_SETTINGS: PomodoroSettings = {
  time: {
    pomodoro: UtilsTimer.minutesToSeconds(25),
    shortBreak: UtilsTimer.minutesToSeconds(5),
    longBreak: UtilsTimer.minutesToSeconds(15),
  },
  font: {
    active: 'Kumbh Sans',
    available: ['Kumbh Sans', 'Roboto Slab', 'Space Mono'],
  },
  color: {
    active: '#f87070',
    available: ['#f87070', '#70f3f8', '#d881f8'],
  },
  pomodorosUntilLongBreak: 4,
  autoStartBreak: true,
  autoStartPomodoro: true,
  autoStartLongBreak: true,
}
