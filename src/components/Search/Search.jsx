import React from 'react';
import {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import axios from 'axios';


function Search() {

    //need redux store to map the images
    
    let [newSearch, setNewSearch] = useState('');
    const dispatch = useDispatch();


    const handleSearch = (event) => {
        event.preventDefault();
        //testing what newSearch is 
        console.log('newSearch in Search.jsx is:', newSearch);

        dispatch({
            type: 'FETCH_SEARCH',
            payload: newSearch
        })

    }

    return(
        <form onSubmit={handleSearch}>
            <input 
                type = 'text'
                placeholder = 'Search Text'
                value={newSearch}
                onChange={(evt) => setNewSearch(evt.target.value)}
            />
            <input 
                type = 'submit'
                value = 'Search'
            />
        </form>
    )
}

export default Search;