import { useDispatch } from 'react-redux';

const SearchItem = ({url, alt, i}) => {
    console.log('url in searchItem is:', url);
    //const image = url.data.images.fixed_width_small.url;

    const dispatch = useDispatch();

    const addFavorite = event => {
        event.preventDefault();
        console.log('The image url is from searchItem.jsx',url)
        dispatch({type:'ADD_FAVORITE', payload: {
            url: url,
            alt: alt
        
        }  })
    }

        return(
            <div key={i}>
                <img src={url} /> 
                <button onClick={addFavorite}>Favorite</button>
            </div>
        )
    }
    

export default SearchItem;