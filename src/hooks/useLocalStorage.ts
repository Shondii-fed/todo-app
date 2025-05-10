import { useEffect, useState } from 'react';

export function useLocalStorage<T>(key: string, initialValue: T) {
    const [storedValue, setStroredValue] = useState<T>(() => {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (err) {
            console.error(err);
            return initialValue;
        }
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(storedValue));
    }, [key, storedValue]);

    return [storedValue, setStroredValue] as const;
}