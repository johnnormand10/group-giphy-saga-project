import React from 'react';
import {useSelector} from 'react-redux';
import { useEffect, useState } from 'react';
import axios from 'axios';

import SearchItem from '../SearchItem/SearchItem';

const SearchList = () => {
//this 
   /*  const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
        const results = await axios("https://api.giphy.com/v1/gifs/search", {
                params: {
                    api_key: "86FkxzzoQKi0pxvEIyhmDkSae1BDE7Dr",
                    q: "dog"
                }
            });
            console.log(results);
            setData(results.data.data);
        }
        fetchData();
    }, []) */
//to this can be deleted
    useEffect
    // gain access to search reducer
    const searchResults = useSelector(store => store.searchReducer);
    console.log('findIt in search list', searchResults);
    // loop through search reducer

    //this can also be deleted
    /* const renderGifs = () => {
        return data.map(el => {
            return <div key={el.id}>
                <img src={el.images.fixed_height.url} />
            </div>
        })
    } */
    
    return(
        <>
        {/* <div>{renderGifs()}</div> */}
        <div>
            {searchResults.map((url, i) => (
                // need to move this to SearchItem component
                <SearchItem url={url.images.original.url} alt={url.title} key={i}/>
            ))}
        </div>
        </>
    )
}

export default SearchList;