import './App.scss'
import { useEffect } from 'react'

import { usePomodoroSettings } from '../../hooks/usePomodoroSettings.ts'
import { usePomodoroTimer } from '../../hooks/usePomodoroTimer.ts'
import { PomodoroTask } from '../../types/common.ts'
import { UtilsTask } from '../../utils/task.ts'
import { UtilsTimer } from '../../utils/timer.ts'
import { Logo } from '../Logo/Logo.tsx'
import { PomodoroModes } from '../PomodoroModes/PomodoroModes.tsx'
import PomodoroTimer from '../PomodoroTimer'

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
      <Logo />
      <p>Sessions: {pomodoroSessionCount}</p>
      <PomodoroModes mode={pomodoroMode} />
      <PomodoroTimer.RootCircle className="timer-root--margin">
        <PomodoroTimer.InnerCircle>
          <PomodoroTimer.ProgressCircle
            total={UtilsTimer.secondsToMinutesWithRound(totalTime)}
            progress={UtilsTimer.secondsToMinutesWithRound(timer)}
            className={timer === 0 ? 'timer-progress--finished' : ''}
          >
            <PomodoroTimer.CountText text={UtilsTimer.displayTime(timer)} />
            <PomodoroTimer.SubText text={task} onClick={handleTaskAction} />
          </PomodoroTimer.ProgressCircle>
        </PomodoroTimer.InnerCircle>
      </PomodoroTimer.RootCircle>
    </div>
  )
}

export default App
