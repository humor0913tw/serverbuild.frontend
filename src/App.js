import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Serverlist from './Serverlist';
import Twvm from './Twvm';

// This is the home component
const Home = () => <h1>Welcome to home pageeee</h1>;

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/serverbuild" element={<Serverlist />} />
          <Route path="/twvm" element={<Twvm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
