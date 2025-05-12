import React, { useState, useRef, useEffect } from "react";

const Carousel = ({
  items,
  renderItem,
  windowSize = 4,
  className = "",
  chevronLeft = null,
  chevronRight = null,
  gap = "gap-4",
  resetKey = undefined,
}) => {
  const [startIndex, setStartIndex] = useState(0);
  const [direction, setDirection] = useState(null); // "left" or "right" for animation
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef(null);

  // Reset carousel position when resetKey changes
  useEffect(() => {
    setStartIndex(0);
  }, [resetKey]);

  const canScrollLeft = startIndex > 0;
  const canScrollRight = startIndex < items.length - windowSize;

  const handleLeft = () => {
    if (!canScrollLeft || isAnimating) return;
    setDirection("left");
    setIsAnimating(true);
    setTimeout(() => {
      setStartIndex((prev) => Math.max(prev - 1, 0));
      setIsAnimating(false);
    }, 300);
  };

  const handleRight = () => {
    if (!canScrollRight || isAnimating) return;
    setDirection("right");
    setIsAnimating(true);
    setTimeout(() => {
      setStartIndex((prev) =>
        Math.min(prev + 1, items.length - windowSize)
      );
      setIsAnimating(false);
    }, 300);
  };

  const translateX = (() => {
    if (!containerRef.current) return 0;
    return -(startIndex * (100 / windowSize));
  })();

  const animationClass =
    isAnimating && direction
      ? `carousel-slide-${direction}`
      : "";

  const visibleItems = items.slice(
    startIndex,
    startIndex + windowSize
  );

  return (
    <div className={`relative w-full ${className}`}>
      <button
        className={`absolute left-0 top-1/2 -translate-y-1/2 -ml-4 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center z-10 transition-opacity ${canScrollLeft ? "opacity-100" : "opacity-50 cursor-not-allowed"}`}
        onClick={handleLeft}
        disabled={!canScrollLeft || isAnimating}
        aria-label="Scroll left"
        tabIndex={0}
        type="button"
      >
        {chevronLeft}
      </button>
      <div
        className={`overflow-hidden w-full`}
        style={{ minHeight: "180px" }}
      >
        <div
          ref={containerRef}
          className={`flex ${gap} transition-transform duration-300 ease-in-out ${animationClass}`}
          style={{
            transform: `translateX(-${startIndex * (100 / windowSize)}%)`,
            width: `${(items.length * 100) / windowSize}%`,
          }}
        >
          {items.map((item, idx) => (
            <div
              key={item.id || idx}
              style={{ width: `${100 / items.length}%`, minWidth: 0 }}
            >
              {renderItem(item)}
            </div>
          ))}
        </div>
      </div>
      <button
        className={`absolute right-0 top-1/2 -translate-y-1/2 -mr-4 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center z-10 transition-opacity ${canScrollRight ? "opacity-100" : "opacity-50 cursor-not-allowed"}`}
        onClick={handleRight}
        disabled={!canScrollRight || isAnimating}
        aria-label="Scroll right"
        tabIndex={0}
        type="button"
      >
        {chevronRight}
      </button>
      <style>
        {`
        .carousel-slide-left, .carousel-slide-right {
          will-change: transform;
        }
        `}
      </style>
    </div>
  );
};

export default Carousel;
