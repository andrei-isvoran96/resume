import React from 'react';
import Header from './components/Header';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-primary-500/30 selection:text-primary-400 overflow-x-hidden">
      {/* Static Gradient Background for Max Performance */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(56,189,248,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-hero-pattern opacity-5" />
      </div>

      <div className="relative z-10">
        <Header />

        <main className="section-container space-y-32">
          <Skills />
          <Experience />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Education />
            <Projects />
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
