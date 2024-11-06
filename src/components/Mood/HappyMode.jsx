import React, { useEffect, useRef, useState } from 'react';

const PNGSequenceAnimation = () => {
  const imgRef = useRef();
  const [currentFrame, setCurrentFrame] = useState(0);
  const totalFrames = 168; // Total number of frames
  const fps = 30; // Desired frames per second
  const frameDuration = 1000 / fps; // Duration in milliseconds for each frame
  const images = [];

  // Generate image paths
  for (let i = 1; i <= totalFrames; i++) {
    images.push(`happy_webp/${String(i).padStart(3, '0')}.webp`);
  }

  // Preload images
  useEffect(() => {
    const preloadImages = () => {
      images.forEach((src) => {
        const img = new Image();
        img.src = src; // Preload the image
      });
    };

    preloadImages(); // Call the preload function
  }, [images]); // Run only once when images are created

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentFrame((prevFrame) => {
        const nextFrame = (prevFrame + 1) % totalFrames;

        // Logic to pause in the specified range
        if (nextFrame > 170 && nextFrame < 340) {
          return prevFrame; // Pause at this range
        }

        return nextFrame; // Otherwise, proceed to the next frame
      });
    }, frameDuration);

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [frameDuration, totalFrames]);

  return (
    <img
      ref={imgRef}
      src={images[currentFrame]}
      className="w-full h-full object-cover"
    />
  );
};

export default PNGSequenceAnimation;
