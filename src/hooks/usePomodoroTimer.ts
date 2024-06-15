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

  const modes = {
    [Modes.Pomodoro]: () => {
      if (canSwitchToLongBreak()) startLongBreak()
      else if (canSwitchToShortBreak()) startShortBreak()
    },
    [Modes.ShortBreak]: () => {
      startPomodoro()
    },
    [Modes.LongBreak]: () => {
      startPomodoro()
    },
  }

  function canSwitchToLongBreak() {
    return settings.autoStartLongBreak && isReadyToLongBreak()
  }

  function canSwitchToShortBreak() {
    return settings.autoStartBreak && isReadyToShortBreak()
  }

  function isReadyToLongBreak() {
    return pomodoroSessionCount >= settings.pomodorosUntilLongBreak
  }

  function isReadyToShortBreak() {
    return pomodoroSessionCount < settings.pomodorosUntilLongBreak
  }

  function startShortBreak() {
    setIsRunning(settings.autoStartBreak)
    setTimer(settings.time.shortBreak)
    setPomodoroMode(Modes.ShortBreak)
  }

  function startLongBreak() {
    setIsRunning(settings.autoStartLongBreak)
    setTimer(settings.time.longBreak)
    setPomodoroMode(Modes.LongBreak)
  }

  function startPomodoro() {
    setIsRunning(settings.autoStartPomodoro)
    setTimer(settings.time.pomodoro)
    setPomodoroMode(Modes.Pomodoro)
    setPomodoroSessionCount(isReadyToLongBreak() ? 1 : pomodoroSessionCount + 1)
  }

  function timerProcessing() {
    if (timer > 0) {
      setTimer(timer - 1)
      return
    }

    stopTimer()
    modes[pomodoroMode]()
  }

  function runTimer() {
    if (pomodoroSessionCount === 0 && pomodoroMode === Modes.Pomodoro) {
      setPomodoroSessionCount(1)
    }
    setIsRunning(true)
    timerID = setInterval(timerProcessing, 1000)
  }

  function stopTimer() {
    setIsRunning(false)
    clearInterval(timerID)
  }

  function resetTimer() {
    stopTimer()
    setTimer(settings.time.pomodoro)
    setPomodoroMode(Modes.Pomodoro)
    setPomodoroSessionCount(0)
  }

  function restartTimer() {
    stopTimer()
    setTimer(settings.time[pomodoroMode])
    runTimer()
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
