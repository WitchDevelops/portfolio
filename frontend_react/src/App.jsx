import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router';
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
    <div className='app'>
      <SocialMedia />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/for-recruiters" element={<ForRecruitersPage />} />
      </Routes>
    </div>
  )
}

export default App