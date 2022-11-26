import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Cell, List, Pagination } from './components';

function App() {
  return (
    <div className="App">
      <Pagination
        pageNo={2}
        totalCount={50}
        onPrev={() => {}}
        onNext={() => {}}
      />
      <List isHeader>
        <Cell>カラム１</Cell>
        <Cell>カラム２</Cell>
        <Cell>カラム３</Cell>
        <Cell>カラム４</Cell>
      </List>
      <List>
        <Cell>データ１</Cell>
        <Cell>データ２</Cell>
        <Cell>データ３</Cell>
        <Cell>データ４</Cell>
      </List>
    </div>
  );
}

export default App;
