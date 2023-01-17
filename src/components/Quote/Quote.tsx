import React from "react";
import './Quote.css';

interface QuoteProps {
    quote: string;
    author: string;
}

export function Quote(props: QuoteProps) {

    return (
        <div className="background">
            <p className="content">{ props.quote }</p>
            <p className="author">     - { props.author }</p>
        </div>
    );
}