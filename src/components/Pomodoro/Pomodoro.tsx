import { PomodoroModes } from './PomodoroModes/PomodoroModes.tsx'
import { PomodoroSettings } from './PomodoroSettings/PomodoroSettings.tsx'
import { PomodoroTimer } from './PomodoroTimer/PomodoroTimer.tsx'
import { usePomodoro } from '../../hooks/pomodoro/usePomodoro.ts'

export const Pomodoro = () => {
  const { pomodoroMode, settings, task, timer, totalTime, changeMode, handleTaskAction, handleSettingsChange } =
    usePomodoro()
  return (
    <>
      <PomodoroModes mode={pomodoroMode} onClick={changeMode} />
      <PomodoroTimer total={totalTime} timer={timer} progress={timer} task={task} onTaskAction={handleTaskAction} />
      <PomodoroSettings settings={settings} onSubmit={handleSettingsChange} />
    </>
  )
}
