import TopBar from "./scenes/global/TopBar"
import { ColorModeContext, useMode } from "./theme"
import { CssBaseline, Theme, ThemeProvider } from "@mui/material"


// Css baseline позволяет обнулить значения по умолчанию а ThemeProvider передавать темы в material ui

function App() {
  const [theme, toggleColorMode] = useMode()


  return (
    <ColorModeContext.Provider value={toggleColorMode as { toggleColorMode: () => void }}>
      <ThemeProvider theme={theme as Partial<Theme>}>
        <CssBaseline>
          <div className="app">
            <main className="content">
              <TopBar />
            </main>
          </div>
        </CssBaseline>
      </ThemeProvider>
    </ColorModeContext.Provider>

  )
}

export default App
