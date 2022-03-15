import React from 'react';

const SearchBox = ({ searchField, searchChange}) => {
    return(
        <div className='pa2'>
            <input className='pa3 ba b--green bg-lightest-blue'
            type='search' 
            placeholder='search robots' 
            onChange={searchChange}
            // we don't need () because the function should not be called directly but only on change
            // we the event is triggered the parent is notified and runs the function searchChange
            />
        </div>
    );
}

export default SearchBox;