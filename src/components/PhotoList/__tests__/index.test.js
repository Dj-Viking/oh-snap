import React from 'react';
import { render, cleanup }  from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PhotoList from '../';
const photos = [
  {
    name: 'Grocery aisle',
    category: 'commercial',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',  
  }
];

const mockCurrentPhotos = jest.fn();
const mockCategory = jest.fn();

afterEach(cleanup);

describe('PhotoList is rendering', () => {
  it('renders', () => {
    render(
      <PhotoList
        // category={mockCategory}
      />
    );
  });

  it('renders', () => {
    const { asFragment } = render
    (
      <PhotoList
        // category={mockCategory}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});