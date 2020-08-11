import React from 'react';

const ListItem = ({ menuOption, selectedPage, onClick }) => {
  let liClass = "nav-item";

  if (menuOption.name === selectedPage) {
    liClass = `${liClass} active`;
  }

  return (
    <li className={ liClass } data-testid={ `navigation-${menuOption.name}` }>
      <a className="nav-link" href="/" onClick={onClick} data-name={menuOption.name}>{ menuOption.text }</a>
    </li>
  );
}

export default ListItem;