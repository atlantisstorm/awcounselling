import React from 'react';
import { render } from "@testing-library/react";
import Qualifications from '../qualifications';

describe('Qualifications component', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(
      <Qualifications />
    );

    expect(asFragment()).toMatchSnapshot();
  });
});