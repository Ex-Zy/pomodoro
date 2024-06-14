import { TimerInnerCircle } from './CircleComponents/TimerInnerCircle.tsx'
import { TimerProgressCircle } from './CircleComponents/TimerProgressCircle.tsx'
import { TimerRootCircle } from './CircleComponents/TimerRootCircle.tsx'
import { TimerCountText } from './TextComponents/TimerCountText.tsx'
import { TimerSubText } from './TextComponents/TimerSubText.tsx'

const Timer = {
  RootCircle: TimerRootCircle,
  InnerCircle: TimerInnerCircle,
  ProgressCircle: TimerProgressCircle,
  CountText: TimerCountText,
  SubText: TimerSubText,
}

export default Timer
