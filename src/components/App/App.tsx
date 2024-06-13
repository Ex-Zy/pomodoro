import './App.scss'
import { useEffect } from 'react'

import { usePomodoroSettings } from '../../hooks/usePomodoroSettings.ts'
import { usePomodoroTimer } from '../../hooks/usePomodoroTimer.ts'
import { UtilsTimer } from '../../utils/timer.ts'
import Timer from '../Timer'

function App() {
  const { settings } = usePomodoroSettings()
  const { isRunning, timer, pomodoroMode, pomodoroSessionCount, runTimer, stopTimer, resetTimer, restartTimer } =
    usePomodoroTimer({ settings })

  const totalTime = settings.time[pomodoroMode]
  const buttonText = timer === 0 ? 'restart' : isRunning ? 'pause' : 'start'
  const handleClick = timer === 0 ? restartTimer : isRunning ? stopTimer : runTimer

  useEffect(() => {
    if (isRunning) {
      runTimer()
    }

    return () => {
      stopTimer()
    }
  }, [isRunning, timer, pomodoroMode, pomodoroSessionCount, settings, runTimer, stopTimer])

  return (
    <div className="app-container">
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
      <Timer.RootCircle className="timer-root--margin">
        <Timer.InnerCircle>
          <Timer.ProgressCircle
            total={UtilsTimer.secondsToMinutesWithRound(totalTime)}
            progress={UtilsTimer.secondsToMinutesWithRound(timer)}
            className={timer === 0 ? 'timer-progress--finished' : ''}
          >
            <Timer.CountText text={UtilsTimer.displayTime(timer)} />
            <Timer.SubText text={buttonText} onClick={handleClick} />
          </Timer.ProgressCircle>
        </Timer.InnerCircle>
      </Timer.RootCircle>
    </div>
  )
}

export default App
