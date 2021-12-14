import { ThemeProvider } from '@material-ui/core';
import { createTheme } from '@material-ui/core/styles'
import React, { useState } from 'react'
import Header from './Components/Header'
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import PageCoin from './Pages/PageCoin';
import Home from './Pages/Home'



function App() {

  const [themeModal, setThemeModal] = useState('light')

  const handleTheme = () => {
    themeModal === 'light' ? setThemeModal('dark') : setThemeModal('light')
  }

  const theme = createTheme({
    palette: {
      type: themeModal === 'light' ? 'light' : 'dark',

      primary: { main: themeModal === 'light' ? '#fafafa' : '#212121' },

      secondary: { main: themeModal === 'light' ? '#212121' : '#ccc'}, /*'#ffb300' */

      background: { paper: themeModal === 'light' ? '#fafafa' : '#212121' }

    },

    typography: { fontFamily: "Montserrat" }
  })

  return (

    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Header theme={themeModal} handleTheme={handleTheme} />
        <Routes>
          <Route path='/crypto-tracker' element={<Home/>} />
          <Route path='/crypto-tracker/coin/:id' element={<PageCoin />} />
        </Routes>
      </Router>
    </ThemeProvider>



  );
}

export default App;
