import './App.scss'
import { useEffect } from 'react'

import { usePomodoroSettings } from '../../hooks/usePomodoroSettings.ts'
import { usePomodoroTimer } from '../../hooks/usePomodoroTimer.ts'
import { PomodoroTask } from '../../types/common.ts'
import { UtilsTask } from '../../utils/task.ts'
import { UtilsTimer } from '../../utils/timer.ts'
import { PomodoroModes } from '../PomodoroModes/PomodoroModes.tsx'
import Timer from '../Timer'

function App() {
  const { settings } = usePomodoroSettings()
  const { isRunning, timer, pomodoroMode, pomodoroSessionCount, runTimer, stopTimer, restartTimer } = usePomodoroTimer({
    settings,
  })

  const totalTime = settings.time[pomodoroMode]
  const task: PomodoroTask = UtilsTask.getTask({ timer, isRunning })
  const taskActions = {
    [PomodoroTask.Restart]: restartTimer,
    [PomodoroTask.Pause]: stopTimer,
    [PomodoroTask.Start]: runTimer,
  }
  const handleTaskAction = taskActions[task]

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
      <p>Sessions: {pomodoroSessionCount}</p>
      <PomodoroModes mode={pomodoroMode} />
      <Timer.RootCircle className="timer-root--margin">
        <Timer.InnerCircle>
          <Timer.ProgressCircle
            total={UtilsTimer.secondsToMinutesWithRound(totalTime)}
            progress={UtilsTimer.secondsToMinutesWithRound(timer)}
            className={timer === 0 ? 'timer-progress--finished' : ''}
          >
            <Timer.CountText text={UtilsTimer.displayTime(timer)} />
            <Timer.SubText text={task} onClick={handleTaskAction} />
          </Timer.ProgressCircle>
        </Timer.InnerCircle>
      </Timer.RootCircle>
    </div>
  )
}

export default App
