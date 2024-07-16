import { PomodoroModes } from './PomodoroModes/PomodoroModes.tsx'
import { PomodoroSettings } from './PomodoroSettings/PomodoroSettings.tsx'
import { PomodoroTimer } from './PomodoroTimer/PomodoroTimer.tsx'
import { usePomodoro } from '../../hooks/pomodoro/usePomodoro.ts'

export const Pomodoro = () => {
  const {
    // Mode options
    pomodoroMode,
    pomodoroSessionCount,
    changeMode,
    // Timer options
    timer,
    totalTime,
    task,
    handleTaskAction,
    // Settings options
    settings,
    handleSettingsChange,
  } = usePomodoro()
  return (
    <>
      <PomodoroModes
        mode={pomodoroMode}
        pomodoroSessionCount={pomodoroSessionCount}
        pomodorosUntilLongBreak={settings.pomodorosUntilLongBreak}
        onClick={changeMode}
      />
      <PomodoroTimer total={totalTime} timer={timer} task={task} onTaskAction={handleTaskAction} />
      <PomodoroSettings settings={settings} onSubmit={handleSettingsChange} />
    </>
  )
}
