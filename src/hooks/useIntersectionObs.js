import { useEffect } from 'react';

// Add "animate" class to tracked classes while inside viewport
export const useIntersectionObs = (element, mobile = null) => {
    useEffect(() => {
        const elements = document.querySelectorAll(element);
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                entry.target.classList.toggle('animate', entry.isIntersecting);
            });
        });
        elements.forEach((e) => {
            observer.observe(e);
        });

        return () => {
            elements.forEach((e) => {
                observer.unobserve(e);
            });
        };
        // mobile class added to update obs when switching to mobile mode
    }, [element, mobile]);
};
