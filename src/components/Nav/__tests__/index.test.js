import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

afterEach(cleanup);

describe('Nav component', () => {
  //baseline test
  it('renders', () => {
    render(<Nav />);
  });
  //snapshot test
  it('matches snapshot', () => {
    const { asFragment } = render(<Nav />);
    //assert value comparison
    expect(asFragment()).toMatchSnapshot();
  });
});

//test emoji visibility
describe('emoji is visible', () => {
  //arrange
  it('inserts emoji into the h2', () => {
    const { getByLabelText } = render(<Nav />);
    //assert
    expect(getByLabelText('camera')).toHaveTextContent('📸');
  });
});

//test for link visibility
describe('links are visible', () => {
  it('inserts text into the links', () => {
    //arrange
    const { getByTestId } = render(<Nav />);
    //assert
    expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
    expect(getByTestId('about')).toHaveTextContent('About Me');
  });
});