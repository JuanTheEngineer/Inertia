import { useState, useEffect } from 'react';

const useFetch = (url) => {
    
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        // Abort controller
        const abortCont = new AbortController();

        // Fetch Request
        fetch(url, { signal: abortCont.signal })
            .then(response => {
                if(!response.ok){
                throw Error("Error: could not fetch data for that resource")
                } 
                return response.json();
            })
            .then(data => {
                setData(data);
                setIsLoading(false);
                setError(null);
            })
            .catch(err => {
                if (err.name === 'AbortError') {
                    console.log('fetch aborted');
                }
                else {
                    setIsLoading(false);
                    setError(err.message);                
                }
            }) 
            
            // Cleanup
            return () => abortCont.abort();

    }, [url]);

    return { data, isLoading, error }
}

export default useFetch;