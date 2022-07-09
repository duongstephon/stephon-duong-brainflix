import React from 'react';
import './SearchBar.scss';

const SearchBar = () => {
    return (
        <form className='searchbar'>
           <input className='searchbar__typable' type="text" id="title" name="title" placeholder="Search"></input>
        </form>
    );
};

export default SearchBar;
