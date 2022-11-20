import React from "react";
import "../styles/search.css";
import getImages from "../requests/getImages";

const Search = ({ setSearchResults }) => {

    const handleSubmit = async (event) => {
        event.preventDefault();
        const res = await getImages(event.target.value)
        setSearchResults(res)
    }

    return (
        <>
            <form className="search-form" onSubmit={handleSubmit}>
                <input
                    className="search-input"
                    type="text"
                    onChange={handleSubmit}
                />
            </form>
        </>
    );
};


export default Search;