import { useState, useEffect } from 'react';

export default function useValid() {
    const [isValid, setIsValid] = useState({isEmail: false, isPw: false});

    useEffect(() => {
        const regex = /^[A-Za-z0-9-_.]+@[A-Za-z0-9-.]+\.[a-z]{2,}+$/
        if (!regex.test(value)) setIsValid(true);
        else (setIsValid(false));
    }, []);

    return {value, isValid, setValue}
}
