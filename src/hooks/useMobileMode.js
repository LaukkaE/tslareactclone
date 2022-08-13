import { useState, useEffect } from 'react';

// Returns true when window-width is smaller than treshold
export const useMobileMode = () => {
    const mobiletreshold = 1268;
    const [mobileMode, setMobileMode] = useState(
        window.innerWidth <= mobiletreshold ? true : false
    );

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 1200) {
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
