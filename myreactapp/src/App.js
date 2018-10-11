import React, { Component } from 'react';
import FilterSelection from './components/filterselection.js';
import DataGrid from './components/datagrid.js'
class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
        <FilterSelection/>
        <DataGrid/>
      </div>
    );
  }
}

export default App;
