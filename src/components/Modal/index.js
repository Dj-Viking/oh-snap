import React from 'react';

function Modal(props) {
  const {
    name,
    category,
    description,
    index
  } = props.currentPhoto;
  const {
    setIsModalOpen
  } = props;
  //console.log(isModalOpen);
  function handleModal() {
    setIsModalOpen(false);
  }
  return (
    <div className="modalBackdrop">
      <div className="modalContainer">
        <h3 className="modalTitle">
          {name}
        </h3>
        <img 
          src={require(`../../assets/large/${category}/${index}.jpg`)}  
          alt="current category"   
        />
        <p>
          {description}
        </p>
        <button
          data-testid='button' 
          onClick={handleModal}
          type="button"
        > Close
        </button>
      </div>
    </div>
  );
}

export default Modal;