import React, { useEffect, useRef, useState } from 'react';

const PNGSequenceAnimation = () => {
  const imgRef = useRef();
  const [currentFrame, setCurrentFrame] = useState(0);
  const totalFrames = 176; // Update based on your image count
  const fps = 30; // Desired frames per second
  const frameDuration = 1000 / fps; // Duration in milliseconds for each frame
  const images = [];

  // Generate image paths
  for (let i = 1; i <= totalFrames; i++) {
    images.push(`playful/${String(i).padStart(3, '0')}.webp`);
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
  }, [images]); // Run once when images are created

  useEffect(() => {
    let animationFrameId;
    let startTime = null;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;

      // Update frame based on elapsed time
      if (elapsed >= frameDuration) {
        setCurrentFrame((prevFrame) => (prevFrame + 1) % totalFrames);
        startTime = timestamp; // Reset start time
      }

      animationFrameId = requestAnimationFrame(animate); // Request next frame
    };

    animationFrameId = requestAnimationFrame(animate); // Start animation

    return () => cancelAnimationFrame(animationFrameId); // Cleanup on unmount
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
