import { About, Footer, Header, Skills, Testimonials, Work } from './container';
import { Navbar, SocialMedia } from './components';
import './App.scss';

const App = () => {

  return (
    <div className='app'>
      <SocialMedia />

      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default App