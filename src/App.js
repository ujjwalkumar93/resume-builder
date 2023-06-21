// import logo from './logo.svg';
// import './App.css';
import { ThemeProvider } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import ResumeCreator from './components/ResumeCreator';
import PageNotFound from './components/PageNotFound'
import { theme } from './theme';



function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        {/* <ThemeProvider theme={theme}></ThemeProvider> */}
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/create-resume" element={<ResumeCreator />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        
      </Router>

    </ThemeProvider>


  );
}

export default App;
