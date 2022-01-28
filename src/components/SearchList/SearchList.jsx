import React from 'react';
import {useSelector} from 'react-redux';
import { useEffect, useState } from 'react';
import axios from 'axios';

import SearchItem from '../SearchItem/SearchItem';

const SearchList = () => {

    useEffect
    // gain access to search reducer
    const searchResults = useSelector(store => store.searchReducer);
    console.log('findIt in search list', searchResults);
    // loop through search reducer

    
    
    return(
        <>
        <div>
            {searchResults.map((url, i) => (
                <SearchItem url={url.images.original.url} alt={url.title} key={i}/>
            ))}
        </div>
        </>
    )
}

export default SearchList;