import React from 'react';
import './App.css';
import ResidentsList from './Components/ResidentsList';
import Search from './Components/Search';
import Error from './Components/Error';

const title = "Hacker Dormitory";
function App() {
  return (
    <div className="App">
      <div>
        <Search />
        <Error/>
        <ResidentsList/>
      </div>
    </div>
  );
}

export default App;
