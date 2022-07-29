import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Details from "./Components/Details";
import Landing from "./Components/Landing";
import Search from "./Components/Search";

const App = () => {
  const [search, setSearch] = useState("");
  function handleSearch(text) {
    setSearch(text);
  }
  return (
    <BrowserRouter>
      <div className='app'>
        <Routes>
          <Route path='/' element={<Landing handleSearch={handleSearch} />} />
          <Route path='/search' element={<Search search={search} />} />
          <Route path='/search/:id' element={<Details />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
