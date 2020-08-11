import React from 'react';
import { render, fireEvent } from "@testing-library/react";
import Navigation from '../navigation';

describe('Navigation component', () => {
  it('should match snapshot', () => {
    const onClick = jest.fn();
    const selectedPage = "home";
    const { asFragment } = render(
      <Navigation onClick={ onClick } selectedPage={selectedPage} />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('should contain contact opton link', () => {
    const onClick = jest.fn();
    const selectedPage = "home";
    let link;
    const { getByTestId } = render(
      <Navigation onClick={ onClick } selectedPage={ selectedPage } />
    );

    link = getByTestId("navigation-home");
    const classAttrib = link.getAttribute("class");
    expect(classAttrib).toContain("active");

    const anchor = link.querySelector('a');
    fireEvent.click(anchor);
    expect(onClick).toHaveBeenCalledTimes(1);

    const dataName = anchor.getAttribute("data-name");
    expect(dataName).toBe("home");
  });
});