import "./SearchBar.css";

interface SearchBarProps {
    onSearch: any;
}

export function SearchBar(props: SearchBarProps) {
    
    return (
        <div className="searchBarBackground">
            <form className="form" onSubmit={props.onSearch}>
                <input type="text" className="searchBar" name="searchBar"/>
                <input type="submit" className="searchButton" value="Search"></input>    
            </form>
        </div>
    );
}