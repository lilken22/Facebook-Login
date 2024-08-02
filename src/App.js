import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import FacebookLogin from './Component/Facebook';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<FacebookLogin />} />
          {/* Add more routes here if needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
