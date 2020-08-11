import React from 'react';
import ListItem from './list-item';

const menuOptions = [
  { 
    name: "home",
    text: "Home"
  },
  { 
    name: "about-me",
    text: "About Me"
  },
  { 
    name: "family-programme",
    text: "Family Programme"
  },
  { 
    name: "timeout-programme",
    text: "Time out Programme"
  },
  { 
    name: "qualifications",
    text: "Qualifications"
  },
  { 
    name: "contact",
    text: "Contact"
  }
];

const Navigation = ({ selectedPage, onClick }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/">Aine Wilson Counselling</a>
      <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportContent">
        <span className="navbar-toggler-icon"></span>
      </button>      
      <div className="collapse navbar-collapse" id="navbarSupportContent">
        <ul className="navbar-nav ml-auto">
          { menuOptions.map((menuOption, index) => (
            <ListItem key={index} menuOption={ menuOption } onClick={ onClick } selectedPage={ selectedPage } />
          ))
          }
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;