import { useState, useEffect } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Header, Footer } from './components/layout';
import { HomePage, ProjectPage, AutomotivePage, PlasticMechanicsPage, CableAssemblyPage } from './components/pages';
import { AdminNewsPage } from './pages/AdminNewsPage/AdminNewsPage';
import './styles/variables.css';
import './styles/global.css';

function App() {
  const [currentPage, setCurrentPage] = useState('Hjem');
  const [showAdmin, setShowAdmin] = useState(false);

  // Check if admin route is requested
  useEffect(() => {
    const checkAdminRoute = () => {
      const hash = window.location.hash;
      const pathname = window.location.pathname;
      
      // Check for admin route in hash or pathname
      if (hash === '#/admin' || hash === '#admin' || pathname === '/admin' || pathname.startsWith('/admin')) {
        setShowAdmin(true);
      } else {
        setShowAdmin(false);
      }
    };

    // Check on mount
    checkAdminRoute();

    // Listen for route changes
    window.addEventListener('popstate', checkAdminRoute);
    window.addEventListener('hashchange', checkAdminRoute);

    return () => {
      window.removeEventListener('popstate', checkAdminRoute);
      window.removeEventListener('hashchange', checkAdminRoute);
    };
  }, []);

  const isHomePage = currentPage === 'Hjem' || currentPage === 'Home';
  const isProjectPage = currentPage === 'prosjekt' || currentPage === 'project';
  const isAutomotivePage = currentPage === 'automotive' || currentPage === 'Automotive';
  const isPlasticMechanicsPage = currentPage === 'Plast & Mekanikk' || currentPage === 'Plastic & Mechanics';
  const isCableAssemblyPage = currentPage === 'Kabel konfeksjon' || currentPage === 'Cable assembly';

  // Show admin page if requested
  if (showAdmin) {
    return (
      <LanguageProvider>
        <AdminNewsPage />
      </LanguageProvider>
    );
  }

  return (
    <LanguageProvider>
      <div className="App">
        <Header 
          currentPage={currentPage} 
          setCurrentPage={setCurrentPage}
        />
        {isHomePage ? (
          <HomePage setCurrentPage={setCurrentPage} />
        ) : isProjectPage ? (
          <ProjectPage />
        ) : isAutomotivePage ? (
          <AutomotivePage />
        ) : isPlasticMechanicsPage ? (
          <PlasticMechanicsPage />
        ) : isCableAssemblyPage ? (
          <CableAssemblyPage />
        ) : (
          <div style={{ minHeight: 'calc(100vh - 200px)' }}></div>
        )}
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
