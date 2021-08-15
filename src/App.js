import React from 'react';
import './App.css';

import Search from './Components/Search';


const title = "Hacker Dormitory";
function App() {
  return (
    <div className="App">
      
      <h2 style={{backgroundColor:'black', color:'green', textAlign:'center'}}>Hacker Dormitory</h2>
      <div>
        <Search />
        
      </div>
    </div>
  );
}

export default App;
