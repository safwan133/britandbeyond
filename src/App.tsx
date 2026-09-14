import type { FC } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './pages/Hero';
import AboutUs from './pages/AboutUs';
import FeaturedCollection from './pages/FeaturedCollection';
import ContactUs from './pages/ContactUs';

const App: FC = () => {
  return (
    <div className="min-h-screen bg-parchment-light">
      <Navbar />
      <main>
        <Hero />
        <AboutUs />
        <FeaturedCollection />
        <ContactUs />
      </main>
      <Footer />
    </div>
  );
};

export default App;
