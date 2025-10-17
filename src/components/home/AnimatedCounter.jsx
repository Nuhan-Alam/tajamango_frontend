import { useEffect, useRef, useState } from "react";

const AnimatedCounter = ({ target, duration = 2000, label, description }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const counterRef = useRef(null);
  const observerRef = useRef(null); // Store observer reference

  useEffect(() => {
    // If already animated, don't set up observer
    if (hasAnimated) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated && target) {
          setHasAnimated(true);
          
          const startTime = Date.now();
          const startValue = 0;
          
          const animate = () => {
            const currentTime = Date.now();
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const currentCount = Math.floor(startValue + (target - startValue) * easeOutQuart);
            
            setCount(currentCount);
            
            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(target);
            }
          };
          
          animate();
          
          // Disconnect observer after animation starts
          if (observerRef.current) {
            observerRef.current.disconnect();
          }
        }
      },
      { threshold: 0.3 }
    );

    if (counterRef.current) {
      observerRef.current.observe(counterRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [target, duration, hasAnimated]);

  return (
    <div ref={counterRef}>
      <h3 className="font-bold text-7xl">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C6D870] to-[#556B2F]">
          {target ? count.toLocaleString() : <span className="loading loading-dots w-8 h-8 text-[#8FA31E]"></span>}
        </span>
      </h3>
      <p className="mt-4 text-xl font-medium text-gray-900">{label}</p>
      <p className="text-base mt-0.5 text-gray-500">{description}</p>
    </div>
  );
};

export default AnimatedCounter;