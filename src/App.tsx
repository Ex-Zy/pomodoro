import { CssVarsProvider, extendTheme } from '@mui/joy/styles'

import { Logo } from './components/Base/Logo/Logo.tsx'
import { Layout } from './components/Layout/Layout.tsx'
import { Pomodoro } from './components/Pomodoro/Pomodoro.tsx'

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
