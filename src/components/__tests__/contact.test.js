import React from 'react';
import { render } from "@testing-library/react";
import Contact from '../contact';

describe('Contact component', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(
      <Contact />
    );

    expect(asFragment()).toMatchSnapshot();
  });
});