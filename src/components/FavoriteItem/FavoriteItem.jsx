import React, {useState} from 'react';
import { useDispatch } from 'react-redux';

const FavoriteItem = ({url, alt, key}) => {

    const [category, setCategory] = useState(1);

    const dispatch = useDispatch();

    const addFavorite = () => {
        console.log('in FavoriteItem with category value and image id', key);
        dispatch({type:'ADD_CATEGORY', payload: {
            categoryId: category,
            id: key
        }});
    }

    return(
        <div key={key}>
            <img src={url} alt={url} /> 
            {/* drop down for different categories */}
            <select name="category" id="category" onChange={(e) => setCategory(e.target.value)} value={category} >
                    <option value="1"> Funny </option>
                    <option value="2"> Cohort </option>
                    <option value="3"> Cartoon </option>
                    <option value="4"> NSFW </option>
                    <option value="5"> Meme </option>
            </select>
            <button onClick={addFavorite}> Add </button>
        </div>
    )
}

export default FavoriteItem;