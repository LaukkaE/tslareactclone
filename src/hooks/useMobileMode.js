import { useState, useEffect } from 'react';

// Returns true when window-width is smaller than treshold
export const useMobileMode = () => {
    const mobiletreshold = 1200;
    const [mobileMode, setMobileMode] = useState(
        window.innerWidth <= mobiletreshold ? true : false
    );

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= mobiletreshold) {
                setMobileMode(true);
            } else {
                setMobileMode(false);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return mobileMode;
};
