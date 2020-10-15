import React from 'react';
import { render, cleanup } from '@testing-library/react';
//render function: jest creates a simulated DOM in a nodejs environment
// to approximate the DOM (no component is actually visibly rendered here)
//cleanup function is used to remove components from the DOM to prevent
// memory leakage, also for variable or data collisions between tests
// that could corrupt test results.
import "@testing-library/jest-dom/extend-expect";
//jest-dom offers access to custom matchers that are used to test DOM
// elements.
import About from '..';//grabbing the About component one directory above where this file is located

//after each test wont have leftover memory data that could give
// false results
afterEach(cleanup);

//using describe function to declare a component we're testing.
describe('About component', () => {
  //renders About test

  //first test
  it('renders', () => {
    render(<About />);
  })
  //second test
  it('matches snapshot DOM node structure', () => {
    //render about
    const { asFragment } = render(<About />);
    expect(asFragment()).toMatchSnapshot();
  })
})