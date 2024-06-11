import './App.scss'
import { useEffect } from 'react'

import { usePomodoroSettings } from '../../hooks/usePomodoroSettings.ts'
import { usePomodoroTimer } from '../../hooks/usePomodoroTimer.ts'
import { Timer } from '../Timer/Timer.tsx'

function App() {
  const { settings } = usePomodoroSettings()
  const { isRunning, timer, pomodoroMode, pomodoroSessionCount, runTimer, stopTimer, resetTimer, restartTimer } =
    usePomodoroTimer({ settings })

  useEffect(() => {
    if (isRunning) {
      runTimer()
    }

    return () => {
      stopTimer()
    }
  }, [isRunning, timer, pomodoroMode, pomodoroSessionCount, settings, runTimer, stopTimer])

  return (
    <>
      <h1>Mode: {pomodoroMode}</h1>
      <p>Time: {timer}</p>
      <p>Pomodoros sessions: {pomodoroSessionCount}</p>
      <button type="button" onClick={runTimer}>
        Run ##
      </button>
      <button type="button" onClick={restartTimer}>
        Restart
      </button>
      <button type="button" onClick={stopTimer}>
        Stop
      </button>
      <button type="button" onClick={resetTimer}>
        Reset !!!
      </button>
      <Timer />
    </>
  )
}

export default App
