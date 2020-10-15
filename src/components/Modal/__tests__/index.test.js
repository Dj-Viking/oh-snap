import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Modal from '..';
afterEach(cleanup);

const currentPhoto = {
  name: 'Park Bench',
  category: 'landscape',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
  index: 1
};
// function handleModal() {
//   // setIsModalOpen(false);
// }
const mockHandleModal = jest.fn();
describe('Modal component', () => {
  //render test
  it('renders', () => {
    render(
      <Modal
        currentPhoto={currentPhoto}
      />
    );
  });
  //snapshot test
  it('matches snapshot', () => {
    const { asFragment } = render
    (
      <Modal
        currentPhoto={currentPhoto}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

describe('click event', () => {
  it('calls toggle function', () => {
    //arrange: render modal
    const { getByTestId } = render
    (
      <Modal 
        setIsModalOpen={mockHandleModal}
        currentPhoto={currentPhoto}
      />
    );
    //act: simulate click event
    fireEvent.click(getByTestId('button'));
    // assert: expected matcher
    expect(mockHandleModal).toHaveBeenCalledTimes(1);
  });
});