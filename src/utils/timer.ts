export const UtilsTimer = {
  minutesToSeconds: (min: number) => min * 60,
  secondsToMinutes: (sec: number) => sec / 60,
  secondsToMinutesWithRound: (sec: number) => Math.ceil(sec / 60),
  displayTime: (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60

    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`
  },
}
