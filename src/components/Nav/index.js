import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers.js';

//passing down the props from the App component
//because we lifted the state of Nav up to App and passing it down.
// so that other components can be aware of the state of another component
function Nav(props) {
  const {
    categories = [],
    setCurrentCategory,
    currentCategory,
    contactSelected,
    setContactSelected
  } = props;
  //console.log(props);
  useEffect(
    () => {
      document.title = capitalizeFirstLetter(currentCategory.name);
    }, [currentCategory]
  );
  return (
    <header className="flex-row">
      <h2>
        <a data-testid="link" href ="/">
          <span role="img" aria-label="camera"> 
            {" "}
            📸
          </span> 
          {" "}
          Oh Snap!
        </a>
      </h2>
      <nav className="nav-ul">
        <ul className="flex-row">
          <li className="mx-2">
            <a 
              data-testid="about" 
              href="#about"
              onClick={() => setContactSelected(false)}
            >
              About Me
            </a>
          </li>
          <li 
            className={//if contactSelected is true then place navActive style to this element
              `mx-1
              ${contactSelected && 'navActive'}
              `
            }
            onClick={() => setContactSelected(true)}
          >
            Contact
          </li>
          {
            categories.map(category => (
              <li
                // key attribute is used like an id attribute // whenever mapping over anything in JSX the outermost element must have a key attribute that's set to be something unique. Helps React keep track of items in the virtual DOM
                className = {
                  //start by initializing the category state as an array of a few objects. and initial state is commercial
                  // the evaluation below will check if currentCategory.name === category.name an if its true the 'navActive' class will be returned to this <li> element
                  `mx-1
                  ${currentCategory.name === category.name && !contactSelected && 'navActive'}
                  `
                }
                key={category.name}
              >
                {/*attaching an event listener directly on the element then executing a function on the click event*/}
                <span
                  onClick = {
                    () => {
                      setCurrentCategory(category);
                      setContactSelected(false);
                    }
                  }
                > 
                  {capitalizeFirstLetter(category.name)}
                </span>
              </li>
            ))
          }
        </ul>
      </nav>
    </header>
  );
}

export default Nav;