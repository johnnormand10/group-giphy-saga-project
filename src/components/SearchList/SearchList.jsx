import React from 'react';
import {useSelector} from 'react-redux';

const SearchList = () => {

    // gain access to search reducer
    const findIt = useSelector(store => store.searchReducer);

    // loop through search reducer
    return(
        <ul>
            {findIt.map((image, i) => (
                // need to move this to SearchItem component
                <img src={image.url} />
            ))}
        </ul>
    )
}

export default SearchList;