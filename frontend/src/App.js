import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ConsentForm from './pages/ConsentForm';
import Questionnaire from './pages/Questionnaire';
import Home from './pages/Home';
import InformationSheet from './pages/InformationSheet'

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" exact element={<InformationSheet />} />
          <Route path="/app" exact element={<Home />} />
          <Route path="/consent"  element={<ConsentForm />}></Route>
          <Route path="/questionnaire" element={<Questionnaire />} />
          {/* <Route path="/app" element={<Video />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;