const SearchItem = ({url, i}) => {
    console.log('url in searchItem is:', url);
    //const image = url.data.images.fixed_width_small.url;

    for (let image of url){
        let images = image.images.original.url;

        return(
            <div key={i}>
                <img src={images} /> 
            </div>
        )
    }
    

    
}

export default SearchItem;