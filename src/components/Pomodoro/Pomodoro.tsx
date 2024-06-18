import { useEffect } from 'react'

import { usePomodoroSettings } from '../../hooks/usePomodoroSettings.ts'
import { usePomodoroTimer } from '../../hooks/usePomodoroTimer.ts'
import { PomodoroTask } from '../../types/common.ts'
import { UtilsTask } from '../../utils/task.ts'
import { UtilsTimer } from '../../utils/timer.ts'
import { PomodoroModes } from '../PomodoroModes/PomodoroModes.tsx'
import { PomodoroSettings } from '../PomodoroSettings/PomodoroSettings.tsx'
import PomodoroTimer from '../PomodoroTimer'

export const Pomodoro = () => {
  const { settings, handleSettingsChange } = usePomodoroSettings()
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
    <>
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
      <PomodoroSettings settings={settings} onSubmit={handleSettingsChange} />
    </>
  )
}
