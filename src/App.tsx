import Header from './components/Header';
import Hero from './components/Hero';
import Equipment from './components/Equipment';
import FleetBanner from './components/FleetBanner';
import Reels from './components/Reels';
import About from './components/About';
import InstagramFeed from './components/InstagramFeed';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Equipment />
        <FleetBanner />
        <Reels />
        <About />
        <InstagramFeed />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
