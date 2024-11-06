
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs  from './pages/AboutUs';
import Courses from './pages/Courses';
import Blogs from './pages/Blogs';
import BlogsDetails from './components/BlogsDetails';
import ContactUs from './pages/ContactUs';
import TeamDetail from './components/TeamDetail';

function App() {
  
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:slug" element={<BlogsDetails />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/" element={<AboutUs />} />
          <Route path="/team/:slug" element={<TeamDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
