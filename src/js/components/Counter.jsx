import react, { useEffect } from 'react';

const simpleCounter = () => {
    const [seconds, setSeconds] = useState (0);
    useEffect(() =>{
        const timer = setInterval (() =>{
            setSeconds (('')=> '' + 1);
        }; 1000);
        return () => clearInterval (timer);
    });
};