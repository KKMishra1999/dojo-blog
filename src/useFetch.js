import { useState, useEffect} from 'react'

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        setTimeout(() => {
            fetch(url)
            .then(res => {
                if(!res.ok)
                    throw Error('could not fetch the data for this resource');
                
                return res.json();
            })
            .then(data => {
                setError(null);
                setData(data);
                setIsPending(false);
            })
            .catch(err => {
                setError(err.message);
                setIsPending(false);
                setData(null);
            })

        }, 1000);
    }, [url])

    return {data, isPending, error};
}

export default useFetch;