import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Projects from './pages/Projects';
import About from './pages/About';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Header from './components/Header';

const App = () => {
  return (
    <BrowserRouter>
      <Header></Header> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
    
  )
}

export default App