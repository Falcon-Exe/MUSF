import React, { useState, useEffect, useRef } from 'react';

const StatCounter = ({ endValue, suffix = '+' }) => {
    const [count, setCount] = useState(0);
    const countRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    let start = 0;
                    const end = parseInt(endValue, 10);
                    if (isNaN(end)) return;

                    const duration = 2000;
                    const increment = end / (duration / 16);

                    const timer = setInterval(() => {
                        start += increment;
                        if (start >= end) {
                            setCount(end);
                            clearInterval(timer);
                        } else {
                            setCount(Math.ceil(start));
                        }
                    }, 16);

                    observer.disconnect();
                }
            },
            { threshold: 0.5 }
        );

        if (countRef.current) observer.observe(countRef.current);

        return () => {
            observer.disconnect();
        };
    }, [endValue]);

    return (
        <span ref={countRef}>
            {count}{suffix}
        </span>
    );
};

export default StatCounter;
