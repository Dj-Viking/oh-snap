import React from 'react';

const categories = [
  {
    name: "Commercial",
    description: "Photos of grocery stores, food trucks, and other commercial projects"
  },
  {
    name: "Portraits",
    description: "Portraits of people in my life"
  },
  {
    name: "Food",
    description: "Delicious delicacies"
  },
  {
    name: "Landscape",
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
        <a href ="/">
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
          {
            categories.map(category => (
              <li
                className="mx-1"
                key={category.name} // key attribute is used like an id attribute // whenever mapping over anything in JSX the outermost element must have a key attribute that's set to be something unique. Helps React keep track of items in the virtual DOM
              >
                <span onClick={() => categorySelected(category.name)}> {/*attaching an event listener directly on the element then executing a function on the click event*/}
                  {category.name}
                </span>
              </li>
            ))
          }
        </ul>
      </nav>
    </header>
  )
}

export default Nav;