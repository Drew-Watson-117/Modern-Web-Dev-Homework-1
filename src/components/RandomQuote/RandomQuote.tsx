import React from "react";
import { Quote } from "../Quote/Quote";

export function RandomQuote(){
    const [quote, setQuote] = React.useState("");
    const [author, setAuthor] = React.useState("");

    React.useEffect(()=>{
        const fetchRandomQuote = async () => {
            const response = await fetch("https://usu-quotes-mimic.vercel.app/api/random")
                .then(response=>{return response.json()})
                .then(data=>{
                    setQuote(data.content);
                    setAuthor(data.author);
                });
        };
        fetchRandomQuote();
    },[]);

    return (
        <Quote author={author} quote={quote}></Quote>
    );
}