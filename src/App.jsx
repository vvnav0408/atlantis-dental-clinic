import React from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './sections/Hero';
import Stats from './sections/Stats';
import Services from './sections/Services';
import About from './sections/About';
import Doctors from './sections/Doctors';
import Testimonials from './sections/Testimonials';
import Gallery from './sections/Gallery';
import Contact from './sections/Contact';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Stats />
        <Services />
        <About />
        <Doctors />
        <Testimonials />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
