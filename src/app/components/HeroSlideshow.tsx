import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const images = [
  "/images/hero/hero2.jpg",
  "/images/hero/hero3.jpg",
  "/images/hero/hero4.jpg",
  "/images/hero/hero5.jpg",
  "/images/hero/hero6.jpg",
];

export function HeroSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000); // 10秒ごとに切り替え

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden bg-gray-100">
      <AnimatePresence>
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ x: "100%" }}           // 右から
          animate={{ x: 0 }}                // 中央へ
          exit={{ x: "-100%" }}             // 左へ流れて退場
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />
      </AnimatePresence>

      {/* インジケーター */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex
                ? "bg-white w-8"
                : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`スライド ${index + 1} へ移動`}
          />
        ))}
      </div>

      {/* クレジット */}
      <div className="absolute bottom-20 right-6 text-white text-sm">
        <p className="text-white drop-shadow-lg">Photo by Waarrk, tueks</p>
      </div>
    </div>
  );
}