import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from './components/HomePage';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/booking" element={<div>Hello</div>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
