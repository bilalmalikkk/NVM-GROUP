import { useState } from 'react';
import './App.css';
import { Header } from './components/Header';
import { HomePage } from './components/HomePage';
import { Footer } from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState('Hjem');
  const [language, setLanguage] = useState('no');

  const isHomePage = currentPage === 'Hjem' || currentPage === 'Home';

  return (
    <div className="App">
      <Header 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage}
        language={language}
        setLanguage={setLanguage}
      />
      {isHomePage ? (
        <HomePage language={language} />
      ) : (
        <div style={{ minHeight: 'calc(100vh - 200px)' }}></div>
      )}
      <Footer language={language} />
    </div>
  );
}

export default App;
