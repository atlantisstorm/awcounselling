import React from 'react';
import { render, fireEvent } from "@testing-library/react";
import ListItem from '../list-item';

describe('ListItem component', () => {
  it('should set active if selectedPage option link', () => {
    const onClick = jest.fn();
    const menuOption = {
      name: "home",
      text: "Home"
    };
    const selectedPage = "home";

    const { getByTestId } = render(
      <ListItem onClick={ onClick } selectedPage={ selectedPage } menuOption={ menuOption } />
    );

    const link = getByTestId("navigation-home");
    const classAttrib = link.getAttribute("class");
    expect(classAttrib).toContain("active");

    const anchor = link.querySelector('a');
    fireEvent.click(anchor);
    expect(onClick).toHaveBeenCalledTimes(1);

    const dataName = anchor.getAttribute("data-name");
    expect(dataName).toBe("home");
  });

  it('should NOT set active if selectedPage option link', () => {
    const onClick = jest.fn();
    const menuOption = {
      name: "home",
      text: "Home"
    };
    const selectedPage = "contact";

    const { getByTestId } = render(
      <ListItem onClick={ onClick } selectedPage={ selectedPage } menuOption={ menuOption } />
    );

    const link = getByTestId("navigation-home");
    const classAttrib = link.getAttribute("class");
    expect(classAttrib).not.toContain("active");

    const anchor = link.querySelector('a');
    fireEvent.click(anchor);
    expect(onClick).toHaveBeenCalledTimes(1);

    const dataName = anchor.getAttribute("data-name");
    expect(dataName).toBe("home");
  });
});