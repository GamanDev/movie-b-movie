import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Details from "./Components/Details";
import Landing from "./Components/Landing";
import Search from "./Components/Search";

const App = () => {
  return (
    <BrowserRouter>
      <div className='app'>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/search' element={<Search />} />
          <Route path='/search/:id' element={<Details />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
