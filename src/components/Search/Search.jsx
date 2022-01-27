import axios from 'axios';

function Search() {
    


    return(
        <form>
            <input 
                type = 'text'
                placeholder = 'Search Text'
                //value
                //onChange
            />
            <input 
                type = 'submit'
                value = 'Search'
            />
        </form>
    )
}

export default Search;