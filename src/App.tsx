import { CssVarsProvider, extendTheme } from '@mui/joy/styles'
import { motion } from 'framer-motion'

import { Logo } from './components/Base/Logo/Logo.tsx'
import { Layout } from './components/Layout/Layout.tsx'
import { Pomodoro } from './components/Pomodoro/Pomodoro.tsx'

const MotionLogo = motion(Logo)

const theme = extendTheme({
  fontFamily: {
    body: 'SF Pro Text, var(--gh-fontFamily-fallback)',
  },
})

function App() {
  return (
    <CssVarsProvider theme={theme}>
      <Layout>
        <MotionLogo
          initial={{ y: 40, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              delay: 0.3,
              duration: 0.3,
            },
          }}
        />
        <Pomodoro />
      </Layout>
    </CssVarsProvider>
  )
}

export default App
