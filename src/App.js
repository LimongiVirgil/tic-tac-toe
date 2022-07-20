import React from 'react';
import './App.css';

import Title from './components/atoms/title/title'
import Table from './components/molecules/table/table'
import Restart from './components/atoms/restart/restart'

function App() {

  return (
    <div className="App">
      <Title />
      <Table />
      <Restart />
    </div>
  );
}

export default App;
