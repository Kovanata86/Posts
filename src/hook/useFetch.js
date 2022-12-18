
import { useState } from "react";

export const useFeching = (cb) => {
    const [isPreloader, setIsPreloader] = useState(false);

    const fetching = async() => {
        setIsPreloader(true);
        await cb()
        setIsPreloader(false);
    }
    return [fetching, isPreloader]
}