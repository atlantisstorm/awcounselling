import React from 'react';
import { render, fireEvent } from "@testing-library/react";
import TimeoutProgramme from '../timeout-programme';

describe('TimeoutProgramme component', () => {
  it('should match snapshot', () => {
    const onClick = jest.fn();
    const { asFragment } = render(
      <TimeoutProgramme onClick={ onClick } />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('should contain contact opton link', () => {
    const onClick = jest.fn();
    const { getByTestId } = render(
      <TimeoutProgramme onClick={ onClick } />
    );

    const link = getByTestId("timeout-programme--contact");
    fireEvent.click(link);
    expect(onClick).toHaveBeenCalledTimes(1);

    const dataName = link.getAttribute("data-name");
    expect(dataName).toBe("contact");
  });
});