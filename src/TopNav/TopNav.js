import React, { Component } from 'react';
import './TopNav.css';
import SearchBar from '../SearchBar/SearchBar';

class TopNav extends Component {

    getSearchValue = (value) => {
        this.props.setSearchValue(value);
    }

    render(){
        return(
            <div className="TopNav">
                <div className="TopNav-logo">
                    <a href="http//www.google.com" className="TopNav-logo-text">Daily<span>HN</span></a>
                </div>
                <SearchBar searchValue={this.props.searchValue} getSearchValue={this.getSearchValue}/>     
            </div>
        )
    }
}

export default TopNav;