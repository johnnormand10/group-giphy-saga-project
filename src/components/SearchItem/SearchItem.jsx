const SearchItem = ({url, i}) => {
    console.log('url in searchItem is:', url);
    //const image = url.data.images.fixed_width_small.url;

        return(
            <div key={i}>
                <img src={url} /> 
            </div>
        )
    }
    

export default SearchItem;