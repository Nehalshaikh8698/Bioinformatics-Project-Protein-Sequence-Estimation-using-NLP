import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Home from './components/Home';
import Analyze from './components/Analyze';
import Models from './components/Models';
import About from './components/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';



function App() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
        <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
        
        <main className="max-w-7xl mx-auto px-6 py-12">
          {activeTab === 'home' && <Home setActiveTab={setActiveTab} />}
          {activeTab === 'analyze' && <Analyze />}
          {activeTab === 'models' && <Models />}
          {activeTab === 'about' && <About />}
        </main>

        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;