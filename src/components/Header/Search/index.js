import { IoMdSearch } from "react-icons/io";

const Search = () => {
    return(
        <div className="searchbox position-relative d-flex align-items-center">
            <IoMdSearch className="mr-2"/>
            <input type="text" placeholder="Search here..."/>
        </div>
    )
}

export default Search;
