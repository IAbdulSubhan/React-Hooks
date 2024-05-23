// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Ustate from './components/Ustate';
import Ureducer from './components/Ureducer'
import Ueffect from './components/Ueffect'
import Uref from './components/Uref';
import Umemo from './components/Umemo';
import Ucontext1 from './components/Ucontext1'

import './App.css';

function App() {
  return (
    <Router>
      <React.Fragment>
        {/* <h1>Hello from the App</h1> */}
        <Routes>
          <Route path="/usestate" element={<Ustate />} />
          <Route path="/usereducer" element={<Ureducer />} />
          <Route path="/useeffect" element={<Ueffect />} />
          <Route path="/useref" element={<Uref />} />
          <Route path="/usememo" element={<Umemo />} />
          <Route path="/usecontext1" element={<Ucontext1 />} />
        </Routes>
      </React.Fragment>
    </Router>
  );
}

export default App;
