import { MdSearch } from "react-icons/md";

const Search = ({setSearchText})=>{
    return(
        <div className="search">
            <MdSearch className="search-icon" size="1.3em" ></MdSearch>
            <input type="text" className="search-text" placeholder="Type to search..." onChange={(event)=>{setSearchText(event.target.value)}}></input>
        </div>
    )
}

export default Search;