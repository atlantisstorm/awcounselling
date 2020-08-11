import React, { useState } from 'react';
import Navigation from './components/navigation';
import Page from './components/page';

const App = () => {
  const [selectedPage, setSelectedPage] = useState('home');

  const onClickSelectPage = (event) => {
    event.preventDefault();
    setSelectedPage(event.target.getAttribute('data-name'));
  }
  return (
    <div className="container">
      <Navigation onClick={onClickSelectPage} selectedPage={selectedPage} />
      <div className="row">
        <div className="col-12 p-2">
          <img className="img-fluid mx-auto d-block" src="/images/flowers-butterfly-with-quote-v2.jpg" alt="Mayo Angelo" />
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <Page onClick={ onClickSelectPage} page={selectedPage} />
        </div>
      </div>
    </div>
  );
}

export default App;