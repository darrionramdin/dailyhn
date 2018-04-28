import React, { Component } from 'react';
import './App.css';

import TopNav from './TopNav/TopNav';
import SideNav from './SideNav/SideNav';
import News from './News/News';

class App extends Component {
  constructor(){
    super();
    this.state = {
      searchValue: '',
      tagFilterName: 'All',
    }
  }

  setSearchValue = (value) => {
    this.setState({searchValue: value});
  }

  filterByTag = (item) => {
    let tag = item.target;
    let selectedTag = tag.innerHTML;
    this.setState({tagFilterName: selectedTag });
  }

  render() {
    return (
      <div className="App">
        <TopNav searchValue={this.state.searchValue} setSearchValue={this.setSearchValue} />
        <SideNav filterByTag={this.filterByTag} />
        <News search={this.state.searchValue} filterTag={this.state.tagFilterName} />
      </div>
    );
  }
}

export default App;
