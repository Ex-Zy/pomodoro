import { UtilsTimer } from './timer.ts'
import type { PomodoroSettings } from '../types/common.ts'

export const DEFAULT_POMODORO_SETTINGS: PomodoroSettings = {
  time: {
    pomodoro: UtilsTimer.minutesToSeconds(25),
    shortBreak: UtilsTimer.minutesToSeconds(5),
    longBreak: UtilsTimer.minutesToSeconds(15),
  },
  font: {
    active: 'Roboto',
    available: ['Roboto', 'Arial', 'Courier New'],
  },
  color: {
    active: '#5394fd',
    available: ['#5394fd', '#f44336', '#4caf50'],
  },
  pomodorosUntilLongBreak: 4,
  autoStartBreak: true,
  autoStartPomodoro: true,
  autoStartLongBreak: true,
}
