import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { SocialMedia } from './components';
import { Navbar } from './components/navigation/Navbar';
import { ForRecruitersPage } from './pages/ForRecruitersPage';
import { HomePage } from './pages/HomePage';
import './App.scss';

const App = () => {
  // handle hash-based scrolling of sections on home page
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.replace("#", "");
      const element = document.getElementById(sectionId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <ThemeProvider theme={theme}>
      <div className='app'>
        <SocialMedia />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/for-recruiters" element={<ForRecruitersPage />} />
        </Routes>
      </div>
    </ThemeProvider>
  )
}

export default App