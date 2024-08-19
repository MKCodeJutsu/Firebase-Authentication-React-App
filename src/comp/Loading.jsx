import React from 'react';
import Header from './header';
import Footer from './footer';
import "./Loading.css"

const Loading = () => {
  return (
    <div>
        <Header />
        <main className="loading">
          <div className="page-loading">
        
          </div>
        </main>
        <Footer />
      </div>
  );
}

export default Loading;
