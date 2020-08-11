import React from 'react';
import { render } from "@testing-library/react";
import Home from '../home';

describe('Home component', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(
      <Home />
    );

    expect(asFragment()).toMatchSnapshot();
  });
});