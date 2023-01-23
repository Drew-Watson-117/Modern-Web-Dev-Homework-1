import { useState } from 'react'
import { SearchBar } from './components/SearchBar/SearchBar'
import { RandomQuote } from './components/RandomQuote/RandomQuote'
import { Quote } from './components/Quote/Quote'
import './App.css'

interface Quote {
  _id: string,
  content: string,
  author: string,
}

function App() {

  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [searchSuccess, setSearchSuccess] = useState(false);

  async function search(searchText: string) {
    const response = await fetch(`https://usu-quotes-mimic.vercel.app/api/search?query=${searchText}`)
            .then(response=>{return response.json()})
            .then(data=>{
                setQuotes(data.results);
            });
    quotes.length > 0 ? setSearchSuccess(true) : setSearchSuccess(false);
    console.log("Submitted");
    
  }

  const renderQuotes = (quotes: any) => {
    if(searchSuccess){
      return quotes.map((quote: any) => <Quote key={quote._id} author={quote.author} quote={quote.content}></Quote>);
    }
    else{
      return (
        <div>
          <RandomQuote></RandomQuote>
        </div>
        );
    }
  }

  return (
    <div className="App">
      <h1> Quote Search </h1>
      <SearchBar onSearch={search}></SearchBar>
      <button onClick={()=>setSearchSuccess(false)}>Generate Random Quote</button>
      {renderQuotes(quotes)}
      
    </div>
  );

}

export default App
