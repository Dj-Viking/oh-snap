import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';
const categories = [
  {
    name: 'portraits',
    description: 'Portraits of people in my life'
  }
];
//using these mock functions as props for the nav component
// to render
const mockCurrentCategory = jest.fn();
const mockSetCurrentCategory = jest.fn();

afterEach(cleanup);

describe('Nav component', () => {
  //baseline test
  it('renders', () => {
    render(
      <Nav
        categories={categories}
        setCurrentCategory={mockSetCurrentCategory}
        currentCategory={mockCurrentCategory}
      />
    );
  });
  //snapshot test
  it('matches snapshot', () => {
    const { asFragment } = render
    (
      <Nav
        categories={categories}
        setCurrentCategory={mockSetCurrentCategory}
        currentCategory={mockCurrentCategory}  
      />
    );
    //assert value comparison
    expect(asFragment()).toMatchSnapshot();
  });
});

//test emoji visibility
describe('emoji is visible', () => {
  //arrange
  it('inserts emoji into the h2', () => {
    const { getByLabelText } = render
    (
      <Nav
        categories={categories}
        setCurrentCategory={mockSetCurrentCategory}
        currentCategory={mockCurrentCategory}
      />
    );
    //assert
    expect(getByLabelText('camera')).toHaveTextContent('📸');
  });
});

//test for link visibility
describe('links are visible', () => {
  it('inserts text into the links', () => {
    //arrange
    const { getByTestId } = render
    (
      <Nav
        categories={categories}
        setCurrentCategory={mockSetCurrentCategory}
        currentCategory={mockCurrentCategory}
      />
    );
    //assert
    expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
    expect(getByTestId('about')).toHaveTextContent('About Me');
  });
});