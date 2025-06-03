import React from 'react';
import { useRoutes } from 'react-router-dom';
import publicRoutes from './routes/publicRoutes';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';

const App: React.FC = () => {
  const element = useRoutes(publicRoutes);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <main style={{ flex: 1, padding: '1rem 2rem' }}>{element}</main>
      <Footer />
    </div>
  );
};

export default App;
