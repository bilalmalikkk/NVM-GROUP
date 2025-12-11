import { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Header, Footer } from './components/layout';
import { HomePage, ProjectPage, WelfareTechnologyPage } from './components/pages';
import './styles/variables.css';
import './styles/global.css';

function App() {
  const [currentPage, setCurrentPage] = useState('Hjem');

  const isHomePage = currentPage === 'Hjem' || currentPage === 'Home';
  const isProjectPage = currentPage === 'prosjekt' || currentPage === 'project';
  const isWelfareTechnologyPage = currentPage === 'Velferds teknologi' || currentPage === 'Welfare technology';

  return (
    <LanguageProvider>
      <div className="App">
        <Header 
          currentPage={currentPage} 
          setCurrentPage={setCurrentPage}
        />
        {isHomePage ? (
          <HomePage />
        ) : isProjectPage ? (
          <ProjectPage />
        ) : isWelfareTechnologyPage ? (
          <WelfareTechnologyPage />
        ) : (
          <div style={{ minHeight: 'calc(100vh - 200px)' }}></div>
        )}
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
