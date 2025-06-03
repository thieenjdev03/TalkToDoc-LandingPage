import React from 'react';
import { useRoutes } from 'react-router-dom';
import publicRoutes from './routes/publicRoutes';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';

const App: React.FC = () => {
  const element = useRoutes(publicRoutes);

  return (
    <>
      <Navbar />
      <main style={{ minHeight: '80vh', padding: '1rem 2rem' }}>{element}</main>
      <Footer />
    </>
  );
};

export default App;
