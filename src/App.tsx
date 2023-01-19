import { useState } from 'react'
import { SearchBar } from './components/SearchBar/SearchBar'
import { RandomQuote } from './components/RandomQuote/RandomQuote'
import { Quote } from './components/Quote/Quote'
import './App.css'

function App() {

  const [quotes, setQuotes] = useState(undefined);

  async function search(e: any) {
    //Prevent reload
    e.preventDefault();
    //Make API call
    let searchText = e.target.elements["searchBar"].value;
    const response = await fetch(`https://api.quotable.io/search/quotes?query=${searchText}&fields=author`)
            .then(response=>{return response.json()})
            .then(data=>{
                setQuotes(data.results);
            });
    
    console.log("Submitted");
    
  }

  const renderQuotes = (quotes: any) => {
    if(quotes !== undefined && quotes.length > 0){
      return quotes.map((quote: any) => <Quote author={quote.author} quote={quote.content}></Quote>)
    }
    else if(quotes !== undefined && quotes.length === 0){
      return (
        <div>
          <p>No quotes found for that search term</p>
          <RandomQuote></RandomQuote>
        </div>
        
      );
    }
    else{
      return <RandomQuote></RandomQuote>
    }
  }
  

  return (
    <div className="App">
      <h1> Quote Search </h1>
      <SearchBar onSearch={search}></SearchBar>
      {renderQuotes(quotes)}
    </div>
  );

}

export default App
