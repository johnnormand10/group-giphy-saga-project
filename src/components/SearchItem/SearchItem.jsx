const SearchItem = ({url, i}) => {
    
    //const image = url.images.url;

    return(
        <div key={i}>
            <img src={url} /> 
        </div>
    )
}

export default SearchItem;