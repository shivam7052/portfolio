import React from 'react';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Resume from './Resume';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const App =()=> {
  return (
    
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="/about" element={<About />}>
        <Route index element={<About />} />
      </Route>
      <Route path="/resume" element={<Resume />}>
        <Route index element={<Resume />} />
      </Route>
      <Route path="/contact" element={<Contact />}>
        <Route index element={<Contact />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
