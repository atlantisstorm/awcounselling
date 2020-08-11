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
          <img className="img-fluid mx-auto d-block" src="/images/flowers-butterfly-with-quote.jpg" alt="Mayo Angelo" width="627" height="939" />
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <Page page={selectedPage} onClick={ onClickSelectPage} />
        </div>
      </div>
    </div>
  );
}

export default App;