import { useState } from "react";
import "./SearchBar.css";

interface SearchBarProps {
    onSearch: any;
}

export function SearchBar(props: SearchBarProps) {
    const [searchText, setSearchText] = useState("");
    const [disabled, setDisabled] = useState(true);

    function textChanged(e:any){
        setSearchText(() => e.target.value)
        console.log(searchText)
        if(searchText===""){
            setDisabled(true);
        }
        else{
            setDisabled(false);
        }
    }

    return (
        <div className="searchBarBackground">
            <form className="form" onSubmit={(e)=>{e.preventDefault(); props.onSearch(searchText);}}>
                <input type="text" className="searchBar" name="searchBar" onChange={textChanged} placeholder=" Search by author" value={searchText}/>
                <input type="submit" className="searchButton" value="Search" disabled={disabled}></input>    
            </form>
        </div>
    );
}