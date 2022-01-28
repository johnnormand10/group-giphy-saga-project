import React from 'react';
import {useSelector} from 'react-redux';
import { useEffect, useState } from 'react';
import axios from 'axios';

import FavoriteItem from '../FavoriteItem/FavoriteItem';

const FavoriteList = () => {

    // gain access to search reducer
    const favoriteResults = useSelector(store => store.getFavorite);
    console.log('findIt in search list', favoriteResults);
    // loop through search reducer


return (
    <>
    <div>
        {favoriteResults.map((url) => (
            <FavoriteItem url={url.url} alt ={url.name} id={url.id}/>
        ))}
    </div>
    </>
)
}

export default FavoriteList;