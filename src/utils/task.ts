import { PomodoroTask } from '../types/common.ts'

export const UtilsTask = {
  isFinishTask({ timer, isRunning }: { timer: number; isRunning: boolean }) {
    return !isRunning && timer === 0
  },

  getTask({ timer, isRunning }: { timer: number; isRunning: boolean }): PomodoroTask {
    if (this.isFinishTask({ timer, isRunning })) {
      return PomodoroTask.Restart
    }
    if (isRunning) {
      return PomodoroTask.Pause
    }

    return PomodoroTask.Start
  },
}
