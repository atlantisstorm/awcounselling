import React from 'react';
import { render, fireEvent } from "@testing-library/react";
import Contact from '../contact';
import { statusMessages }  from '../../utils';

describe('Contact component', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(
      <Contact />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('should display error if submit with empty fields.', () => {
    const { container, getByTestId } = render(
      <Contact />
    );

    expect(container.innerHTML).not.toContain(statusMessages.error);

    const submitButton = getByTestId("submit-button");
    fireEvent.click(submitButton);

    expect(container.innerHTML).toContain(statusMessages.error);
  });  
});