import { useEffect } from "react";

export function useTimer(callback: () => void, delay: number) {
    useEffect(() => {
        const id = setInterval(callback, delay);
        return () => clearInterval(id);
    }, [callback, delay]);
}
