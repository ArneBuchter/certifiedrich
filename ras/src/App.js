import React from 'react';
import Header from './components/header'
import Main from './components/main'
import Footer from './components/footer'
import './App.css';

function App() {
  return (
    <header>
      <Header />
        <main>
          <Main />
        </main>
        <footer>
          <Footer />
        </footer>
    </header>
  );
}

export default App;
