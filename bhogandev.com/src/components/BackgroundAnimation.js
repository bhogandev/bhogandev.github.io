import React, { useEffect, useState } from 'react';

const BackgroundAnimation = () => {
    const [stars, setStars] = useState([]);

    // Initialize stars on component mount
    useEffect(() => {
        const numStars = 50; // Adjust the number of stars as needed
        const starsArray = [];

        for (let i = 0; i < numStars; i++) {
            const left = `${Math.random() * window.innerWidth}px`; // Random horizontal position
            const top = `${Math.random() * window.innerHeight}px`; // Random vertical position

            starsArray.push({
                id: i,
                left,
                top,
                speedX: Math.random() * 4 - 2, // Random horizontal speed (-2 to 2)
                speedY: Math.random() * 4 - 2, // Random vertical speed (-2 to 2)
            });
        }

        setStars(starsArray);
    }, []);

    // Update stars position
    const updateStarsPosition = () => {
        setStars(prevStars => {
            return prevStars.map(star => {
                let newLeft = parseFloat(star.left) + star.speedX;
                let newTop = parseFloat(star.top) + star.speedY;

                // Check for collision with window edges
                if (newLeft < 0 || newLeft > window.innerWidth) {
                    star.speedX *= -1; // Reverse horizontal speed
                }
                if (newTop < 0 || newTop > window.innerHeight) {
                    star.speedY *= -1; // Reverse vertical speed
                }

                return {
                    ...star,
                    left: `${newLeft}px`,
                    top: `${newTop}px`
                };
            });
        });
    };

    // Check for collisions between stars
    const checkCollisions = () => {
        setStars(prevStars => {
            const updatedStars = prevStars.map(star => ({ ...star }));

            for (let i = 0; i < updatedStars.length; i++) {
                for (let j = i + 1; j < updatedStars.length; j++) {
                    const star1 = updatedStars[i];
                    const star2 = updatedStars[j];

                    const dx = parseFloat(star1.left) - parseFloat(star2.left);
                    const dy = parseFloat(star1.top) - parseFloat(star2.top);
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 50) { // Adjust collision radius as needed
                        // Swap positions of colliding stars
                        [star1.left, star2.left] = [star2.left, star1.left];
                        [star1.top, star2.top] = [star2.top, star1.top];
                    }
                }
            }

            return updatedStars;
        });
    };

    // Perform animation loop
    useEffect(() => {
        const animationFrame = requestAnimationFrame(() => {
            updateStarsPosition();
            checkCollisions();
        });

        return () => cancelAnimationFrame(animationFrame);
    }, [stars]);

    return (
        <div className="stars-container">
            {stars.map(star => (
                <div key={star.id} className="star" style={{ top: star.top, left: star.left }}></div>
            ))}
        </div>
    );
};

export default BackgroundAnimation;
