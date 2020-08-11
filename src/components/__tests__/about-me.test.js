import React from 'react';
import { render, fireEvent } from "@testing-library/react";
import AboutMe from '../about-me';

describe('AboutMe component', () => {
  it('should match snapshot', () => {
    const onClick = jest.fn();
    const { asFragment } = render(
      <AboutMe onClick={ onClick } />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('should contain contact opton link', () => {
    const onClick = jest.fn();
    const { getByTestId } = render(
      <AboutMe onClick={ onClick } />
    );

    const link = getByTestId("about-me--family-programme");
    fireEvent.click(link);
    expect(onClick).toHaveBeenCalledTimes(1);

    const dataName = link.getAttribute("data-name");
    expect(dataName).toBe("family-programme");
  });
});