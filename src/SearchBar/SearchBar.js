import React, { Component } from 'react';
import './SearchBar.css';
import searchIcon from './assets/search-icon.svg';

class SearchBar extends Component {

    handleValueChange = (event) => {
        this.props.getSearchValue(event.target.value);
    }

    render(){
        return( 
            <div className="SearchBar">
                <img className="SearchBar-icon" src={searchIcon} alt="Search" />
                <input type="text" value={this.props.searchValue} onChange={this.handleValueChange} className="SearchBar-input" />
            </div>
        );
    }
}

export default SearchBar;