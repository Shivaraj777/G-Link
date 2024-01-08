import './App.css';
import AppHeader from './components/AppHeader';
import { ThemeProvider } from 'styled-components';

function App() {

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

  return (
    <div className="App">
      <ThemeProvider theme={lightTheme}>
        <AppHeader />
      </ThemeProvider>
    </div>
  );
}

export default App;
