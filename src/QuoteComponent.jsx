import { useState, useEffect } from "react"

export default function QuoteComponent () {
    const [quote, setQuote] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    async function fetchQuote() {
        setIsLoading(true)
        try{
            const response = await fetch("https://dummyjson.com/quotes/random");
            const data = await response.json();
            setQuote(data);
        } catch (error) {
            console.error("Error fetching quote: ", error);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchQuote();
    }, []);

    return (
        <div  className="quote-container" style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Random Quote Generator</h1>
            
            {isLoading? (<p>Loading...</p>) : 
                (
                <div>
                    <h3>"{quote?.quote}"</h3>
                    <p>- {quote?.author}</p>
                </div>
                )
            }
                    <button onClick={fetchQuote} style={{ marginTop: '15px' }}>
                        New Quote
                    </button>


        </div>
    );
};