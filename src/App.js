import React, { useState, useRef } from 'react';
import Navigation from './components/navigation';
import Page from './components/page';

const App = () => {
  const [selectedPage, setSelectedPage] = useState('home');
  const navButtonRef = useRef(null);

  const onClickSelectPage = (event) => {
    event.preventDefault();
    setSelectedPage(event.target.getAttribute('data-name'));
    // If the nav button is not collapsed (i.e. we're on a small device),
    // then we want to close(toggle) it when someone has selected a page.
    if (!navButtonRef.current.className.match(/collapsed/g)) {
      navButtonRef.current.click();
    }
  }

  return (
    <div className="container">
      <Navigation onClick={onClickSelectPage} selectedPage={selectedPage} navButtonRef={ navButtonRef } />
      <div className="row">
        <div className="col-12 pt-2 pb-2 pr-3 pl-3">
          <img className="img-fluid mx-auto d-block" src="/images/flowers-butterfly-with-quote.jpg" alt="Mayo Angelo" />
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