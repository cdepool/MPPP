
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Pillars from './components/Pillars';
import Testimonial from './components/Testimonial';
import VolunteerForm from './components/VolunteerForm';
import Differentiators from './components/Differentiators';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Pillars />
        <Testimonial />
        <VolunteerForm />
        <Differentiators />
      </main>
      <Footer />
    </div>
  );
};

export default App;
