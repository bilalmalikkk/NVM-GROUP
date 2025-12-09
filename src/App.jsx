import { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Header, Footer } from './components/layout';
import { HomePage } from './components/pages';
import './styles/variables.css';
import './styles/global.css';

function App() {
  const [currentPage, setCurrentPage] = useState('Hjem');

  const isHomePage = currentPage === 'Hjem' || currentPage === 'Home';

  return (
    <LanguageProvider>
      <div className="App">
        <Header 
          currentPage={currentPage} 
          setCurrentPage={setCurrentPage}
        />
        {isHomePage ? (
          <HomePage />
        ) : (
          <div style={{ minHeight: 'calc(100vh - 200px)' }}></div>
        )}
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
