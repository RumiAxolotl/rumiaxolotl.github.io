import Starfield from './components/Starfield.jsx';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="app">
      <Starfield />
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
}
