import React from 'react';
import { render, fireEvent } from "@testing-library/react";
import FamilyProgramme from '../family-programme';

describe('FamilyProgramme component', () => {
  it('should match snapshot', () => {
    const onClick = jest.fn();
    const { asFragment } = render(
      <FamilyProgramme onClick={ onClick } />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('should contain contact opton link', () => {
    const onClick = jest.fn();
    const { getByTestId } = render(
      <FamilyProgramme onClick={ onClick } />
    );

    const link = getByTestId("family-programme--contact");
    fireEvent.click(link);
    expect(onClick).toHaveBeenCalledTimes(1);

    const dataName = link.getAttribute("data-name");
    expect(dataName).toBe("contact");
  });
});