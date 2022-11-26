import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Pagination } from './components/Pagination/Pagination';

function App() {
  return (
    <div className="App">
      <Pagination
        pageNo={2}
        totalCount={50}
        onPrev={() => {}}
        onNext={() => {}}
      />
    </div>
  );
}

export default App;
