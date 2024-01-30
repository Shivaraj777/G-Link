import './App.css';
import { ThemeProvider } from 'styled-components';
import HomePage from './pages/HomePage';
import AOS from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { GlobalStyle } from './styles/GlobalStyles';
import { Routes, Route } from 'react-router-dom';
import AuthPage from './pages/AuthPage';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';

function App() {
  // access store state using useSelector hook
  const { darkThemeEnabled } = useSelector((state) => state.theme);

  // initialize AOS
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 2000,
      offset: 100
    });
  }, []);


  // app light theme
  const lightTheme = {
    colors: {
      heading: "rgb(24 24 29)",
      heading2: "rgb(255, 255, 255)",
      white: "#fff",
      black: " #212529",
      cyan: "#1ca9fe",
      green: "#4eac6d",
      danger: "#ff4e2b",
      light: "#223645",

      text: {
        primary: "#000000",
        secondary: "rgba(29 ,29, 29, .8)",
      },

      rgb: {
        secondary: "78,172,109",
        cyan: "28,157,234",
        heading: "0,0,0",
      },

      bg: {
        primary: "#fff",
        secondary: "#eff7fe",
      },
      bg2: {
        primary: "#fff",
        secondary: "rgba(28,157,234,.05)",
      },

      border2: {
        primary: "#00000026",
      },
      boxShadow: {
        primary: "rgba(28, 157, 234, 0.2)",
      },

      btn: {
        secondary: "22 163 74",
        danger: "255, 78, 43",
        light: "#f6f6f9",
      },

      hr: "#ffffff",
      border: "181, 181, 181",
      img_border: "255, 255, 255",
      gradient: "linear-gradient(145deg,#1ca9fe,#1c6ee9);",
    },

    media: {
      mobile: "800px",
      tab: "998px",
    }
  };


  // app dark theme
  const darkTheme = {
    colors: {
      heading: "rgb(255, 255, 255)",
      heading2: "rgb(24 24 29)",
      white: "#ffffff",
      black: "#000000",
      cyan: "#1ca9fe",
      green: "#4eac6d",
      danger: "#ff4e2b",
      light: "#223645",

      text: {
        primary: "#212529",
        secondary: "#8f9198",
      },

      rgb: {
        secondary: "78,172,109",
        cyan: "28,157,234",
        heading: "255,255,255",
      },

      bg: {
        black: "#000000",
        primary: "#262626",
        secondary: "#2e2e2e",
      },
      border2: {
        primary: "#FFFFFF26",
      },

      bg2: {
        primary: "#0c1631",
        secondary: "#0e1b38",
      },
      boxShadow: {
        primary: "rgba(1, 201 ,245, 0.4)",
      },

      btn: {
        secondary: "22 163 74",
        danger: "255, 78, 43",
        light: "#25262c",
      },

      hr: "#ffffff",
      border: "65, 66, 72",
      img_border: "31, 41, 55",
      gradient: "linear-gradient(145deg,#1ca9fe,#1c6ee9);",
    },

    media: {
      mobile: "800px",
      tab: "998px",
    },
  };


  return (
    <ThemeProvider theme={darkThemeEnabled ? darkTheme : lightTheme}>
      <GlobalStyle />
      <div className='App'>
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route path='/auth' element={<AuthPage />}>
            <Route path='' element={<Login />} />
            <Route path='sign-up' element={<Signup />} />
          </Route>
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
