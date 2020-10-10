import React from 'react';

const categories = [
  {
    name: "commercial",
    description: "Photos of grocery stores, food trucks, and other commercial projects"
  },
  {
    name: "portraits",
    description: "Portraits of people in my life"
  },
  {
    name: "food",
    description: "Delicious delicacies"
  },
  {
    name: "landscape",
    description: "Fields, farmhouses, waterfalls, and the beauty of nature"
  }
];

const categorySelected = (name) => {
  console.log(`category selected: ${name}`);
}

const Nav = () => {
  return (
    <header>
      <h2>
        <a href ='/'>
          <span role="img" aria-label="camera"> 📸</span> Oh Snap!
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a href="#about">
              About Me
            </a>
          </li>
          <li>
            <span>Contact</span>
          </li>
        </ul>
        <ul>
          {
            categories.map(category => 
              (
              <li
                className="mx=1"
                key={category.name}//often this key property is a unique id/name for the element
              >
                <span onClick={() => categorySelected(category.name)}> {/*adding click event listener on the span*/}
                  {category.name}
                </span>
              </li>
              )
            )
          }
        </ul>
      </nav>
    </header>
  )
}

export default Nav;