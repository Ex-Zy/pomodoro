import './App.scss'

import { CssVarsProvider, extendTheme } from '@mui/joy/styles'

import { Layout } from '../Layout/Layout.tsx'
import { Logo } from '../Logo/Logo.tsx'
import { Pomodoro } from '../Pomodoro/Pomodoro.tsx'

const theme = extendTheme({
  fontFamily: {
    body: 'SF Pro Text, var(--gh-fontFamily-fallback)',
  },
})

function App() {
  return (
    <CssVarsProvider theme={theme}>
      <Layout>
        <Logo />
        <Pomodoro />
      </Layout>
    </CssVarsProvider>
  )
}

export default App
