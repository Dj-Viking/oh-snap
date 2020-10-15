import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactForm from '..';

afterEach(cleanup);

describe('ContactForm component', () => {
  it('renders', () => {
    render(
      <ContactForm />
    );
  });
  //snapshot test
  it('matches snapshot', () => {
    const { asFragment } = render
    (
      <ContactForm />
    );
    //assert value comparison
    expect(asFragment()).toMatchSnapshot();
  });

  it('header is visible', () => {
    //arrange
    const { getByTestId } = render
    (
      <ContactForm />
    );
    //assert
    expect(getByTestId('contact')).toHaveTextContent('Contact Me');
    expect(getByTestId('button')).toHaveTextContent('Submit');
  });
});