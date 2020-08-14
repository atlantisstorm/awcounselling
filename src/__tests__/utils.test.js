import React from 'react';
import { initState, sendEmail, statusMessages }  from '../utils';

const createMockXHR = () => {
  const mockXHR = {
    open: jest.fn(),
    send: jest.fn(),
    setRequestHeader: jest.fn()
  };

  return mockXHR;
};


describe('Contact component', () => {
  const oldXMLHttpRequest = window.XMLHttpRequest;
  let mockXHR = null;

  beforeEach(() => {
    mockXHR = createMockXHR();
    window.XMLHttpRequest = jest.fn(() => mockXHR);
  });

  afterEach(() => {
    window.XMLHttpRequest = oldXMLHttpRequest;
  });

  it('should display error if submit with empty fields.', () => {
    const formState = {
      first_name: "",
      surname: "",
      email: "",
      message: "",
      status: "",
      statusTextStyle: ""
    };

    const expectedFormState = {
        first_name: "",
        surname: "",
        email: "",
        message: "",
        status: statusMessages.error,
        statusTextStyle: "danger"
      };

    const setFormState = jest.fn();

    sendEmail({ formState, setFormState });

    expect(setFormState).toHaveBeenCalledTimes(1);
    expect(setFormState).toHaveBeenCalledWith(expectedFormState);
  });

  it('should display error invalid email.', () => {
    const formState = {
      first_name: "John",
      surname: "Doe",
      email: "bad-email.test.com",
      message: "hello",
      status: "",
      statusTextStyle: ""
    };

    const expectedFormState = {
      first_name: "John",
      surname: "Doe",
      email: "bad-email.test.com",
      message: "hello",
      status: statusMessages.error,
      statusTextStyle: "danger"
    };

    const setFormState = jest.fn();

    sendEmail({ formState, setFormState });

    expect(setFormState).toHaveBeenCalledTimes(1);
    expect(setFormState).toHaveBeenCalledWith(expectedFormState);
  });

  it('should send ...', () => {
    const formState = {
      first_name: "John",
      surname: "Doe",
      email: "good-email@test.com",
      message: "hello",
      status: "",
      statusTextStyle: ""
    };

    const expectedFormState = {
      first_name: "John",
      surname: "Doe",
      email: "good-email@test.com",
      message: "hello",
      status: statusMessages.sending,
      statusTextStyle: "warning"
    };

    const setFormState = jest.fn();

    sendEmail({ formState, setFormState });

    expect(setFormState).toHaveBeenCalledTimes(1);
    expect(setFormState).toHaveBeenCalledWith(expectedFormState);

    expect(mockXHR.open).toHaveBeenCalledTimes(1);
    expect(mockXHR.open).toHaveBeenCalledWith("POST", "/conform", true);

    expect(mockXHR.setRequestHeader).toHaveBeenCalledTimes(1);
    expect(mockXHR.setRequestHeader).toHaveBeenCalledWith("Content-type", "application/json");

    const expectedSendJSONString = "{\"name\":\"John Doe\",\"email\":\"good-email@test.com\",\"message\":\"hello\"}";
    expect(mockXHR.send).toHaveBeenCalledTimes(1);
    expect(mockXHR.send).toHaveBeenCalledWith(expectedSendJSONString);
  });
});