export interface PomodoroSettings {
  time: PomodoroTimeOptions
  font: PomodoroFontOptions
  color: PomodoroColorOptions
  pomodorosUntilLongBreak: number
  autoStartBreak: boolean
  autoStartPomodoro: boolean
  autoStartLongBreak: boolean
}

export interface PomodoroTimeOptions {
  pomodoro: number
  shortBreak: number
  longBreak: number
}

export interface PomodoroFontOptions {
  active: string
  available: string[]
}

interface PomodoroColorOptions {
  active: string
  available: string[]
}

export enum Modes {
  Pomodoro = 'pomodoro',
  ShortBreak = 'shortBreak',
  LongBreak = 'longBreak',
}
