const SearchItem = ({image}) => {
    return(
        <li key={image.id}>
            <img src={image} />
        </li>
    )
}

export default SearchItem;