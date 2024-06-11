import { useState } from 'react'

import { Modes, type PomodoroSettings } from '../types/common.ts'

interface Options {
  settings: PomodoroSettings
}

export const usePomodoroTimer = ({ settings }: Options) => {
  const [isRunning, setIsRunning] = useState(false)
  const [timer, setTimer] = useState<number>(settings.time.pomodoro)
  const [pomodoroMode, setPomodoroMode] = useState<Modes>(Modes.Pomodoro)
  const [pomodoroSessionCount, setPomodoroSessionCount] = useState(0)

  let timerID: ReturnType<typeof setInterval>
  const DURATION = 1000

  const modes = {
    [Modes.Pomodoro]: () => {
      canSwitchToLongBreak() ? startLongBreak() : startShortBreak()
    },
    [Modes.ShortBreak]: () => {
      startPomodoro()
    },
    [Modes.LongBreak]: () => {
      startPomodoro()
    },
  }

  function canSwitchToLongBreak() {
    return pomodoroSessionCount >= settings.pomodorosUntilLongBreak
  }

  function startShortBreak() {
    setIsRunning(settings.autoStartBreak)
    setTimer(settings.time.shortBreak)
    setPomodoroMode(Modes.ShortBreak)
    setPomodoroSessionCount(pomodoroSessionCount + 1)
  }

  function startLongBreak() {
    setIsRunning(settings.autoStartLongBreak)
    setTimer(settings.time.longBreak)
    setPomodoroMode(Modes.LongBreak)
    setPomodoroSessionCount(0)
  }

  function startPomodoro() {
    setIsRunning(settings.autoStartPomodoro)
    setTimer(settings.time.pomodoro)
    setPomodoroMode(Modes.Pomodoro)
  }

  function timerProcessing() {
    if (timer > 0) {
      setTimer(timer - DURATION)
      return
    }

    stopTimer()
    modes[pomodoroMode]()
  }

  function runTimer() {
    setIsRunning(true)
    timerID = setInterval(timerProcessing, DURATION)
  }

  function stopTimer() {
    clearInterval(timerID)
  }

  function resetTimer() {
    stopTimer()
    setIsRunning(false)
    setTimer(settings.time.pomodoro)
    setPomodoroMode(Modes.Pomodoro)
    setPomodoroSessionCount(0)
  }

  function restartTimer() {
    clearInterval(timerID)
    setIsRunning(true)
    setTimer(settings.time[pomodoroMode])
    timerID = setInterval(timerProcessing, DURATION)
  }

  return {
    isRunning,
    timer,
    pomodoroMode,
    pomodoroSessionCount,
    runTimer,
    stopTimer,
    resetTimer,
    restartTimer,
  }
}
