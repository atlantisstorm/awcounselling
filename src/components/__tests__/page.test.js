import React from 'react';
import { render } from "@testing-library/react";
import Page from '../page';
import AboutMe from '../about-me';
import Home from '../home';

describe('Page component', () => {
  it('should return correct page based on supplied value - home', () => {
    const onClick = jest.fn();
    let page = "home";

    const { container } = render(
      <Page onClick={ onClick } page={ page }/>
    );

    expect(container.innerHTML).toContain("offering professional and client centred");
  });

  it('should return correct page based on supplied value - about-me', () => {
    const onClick = jest.fn();
    let page = "about-me";

    const { container } = render(
      <Page onClick={ onClick } page={ page }/>
    );

    expect(container.innerHTML).toContain("my home based private practice");
  });
});