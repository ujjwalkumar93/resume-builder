// import logo from './logo.svg';
// import './App.css';
import { ThemeProvider } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import ResumeCreator from './pages/ResumeCreator';
import PageNotFound from './pages/PageNotFound'
import { theme } from './theme';
import { Provider } from 'react-redux';
import store  from './store/store';



function App() {
  return (
    <Provider store={store}>
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
    </Provider>



  );
}

export default App;
