import React, { useState } from 'react';
import Nav from './components/Nav/index.js';
import About from './components/About/index.js';
import Gallery from './components/Gallery/index.js';  
//import SomeComponent from './components/SomeComponent.js';

function App() {
  const [ categories ] = useState
  (
    [
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
    ]
  );
  //console.log(categories);
  const [ currentCategory, setCurrentCategory ] = useState(categories[0]);
  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      />
      <main>
        <Gallery
          currentCategory={currentCategory}
        />
        <About />
      </main>
      {/* <SomeComponent /> */}
    </div>
  );
}

export default App;
