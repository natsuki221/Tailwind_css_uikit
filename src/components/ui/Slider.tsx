"use client";
import React from "react";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { useInterval } from "@/hooks/useInterval"; // 如果你有此Hook，保留；沒有就自行實作或拿掉

interface SliderProps {
  /** 每個 Slide 的內容 */
  slides: React.ReactNode[];

  /** 顯示幾張。若 >1，會並排顯示 slidesToShow 張 */
  slidesToShow?: number;

  /** 是否啟用自動輪播 */
  autoPlay?: boolean;

  /** 自動輪播間隔 (毫秒) */
  autoPlayInterval?: number;

  /** 是否啟用拖曳滑動 */
  enableDrag?: boolean;

  /** 是否自動依照當前 Slide 的高度做容器撐高 */
  dynamicHeight?: boolean;

  /** className for 外層容器 */
  className?: string;
}

const Slider: React.FC<SliderProps> = ({
  slides,
  slidesToShow = 1,
  autoPlay = false,
  autoPlayInterval = 3000,
  enableDrag = false,
  dynamicHeight = false,
  className = "",
}) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const containerRef = React.useRef<HTMLDivElement>(null);

  // ─────────────────────────────────────────────────────
  // 1) 自動輪播
  // ─────────────────────────────────────────────────────
  useInterval(
    () => {
      handleNext();
    },
    autoPlay ? autoPlayInterval : null
  );

  // ─────────────────────────────────────────────────────
  // 2) 觸控/滑動（Framer Motion 提供 drag）
  // ─────────────────────────────────────────────────────
  const [dragConstraints, setDragConstraints] = React.useState({
    left: 0,
    right: 0,
  });

  React.useEffect(() => {
    if (!enableDrag || slidesToShow > 1) return;
    if (containerRef.current) {
      const width = containerRef.current.offsetWidth;
      setDragConstraints({ left: -width * 0.8, right: width * 0.8 });
    }
  }, [enableDrag, slidesToShow]);

  const handleDragEnd = (
    _event: PointerEvent | TouchEvent | MouseEvent,
    info: { offset: { x: number } }
  ) => {
    if (info.offset.x < -80) handleNext();
    if (info.offset.x > 80) handlePrev();
  };

  // ─────────────────────────────────────────────────────
  // 3) 切換方法
  // ─────────────────────────────────────────────────────
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  // ─────────────────────────────────────────────────────
  // 4) 動態高度
  // ─────────────────────────────────────────────────────
  const [slideHeight, setSlideHeight] = React.useState<number | undefined>(
    undefined
  );

  React.useEffect(() => {
    if (!dynamicHeight) return;
    const timeout = setTimeout(() => {
      if (!containerRef.current) return;
      const activeSlide = containerRef.current.querySelector<HTMLElement>(
        "[data-active-slide]"
      );
      if (activeSlide) {
        setSlideHeight(activeSlide.offsetHeight);
      }
    }, 100);
    return () => clearTimeout(timeout);
  }, [currentIndex, dynamicHeight, slides]);

  // 多張並排
  const visibleSlides = React.useMemo(() => {
    if (slidesToShow > 1) {
      const arr: React.ReactNode[] = [];
      for (let i = 0; i < slidesToShow; i++) {
        const idx = (currentIndex + i) % slides.length;
        arr.push(slides[idx]);
      }
      return arr;
    }
    return [slides[currentIndex]];
  }, [slides, currentIndex, slidesToShow]);

  return (
    <div
      ref={containerRef}
      className={clsx("relative", className)}
      style={{
        width: "auto",
        transition: dynamicHeight ? "height 0.3s ease" : undefined,
        height: dynamicHeight
          ? slideHeight
            ? `${slideHeight}px`
            : "auto"
          : "auto",
      }}
    >
      <div className="relative">
        {/* 陰影層：依容器大小自動調整 */}
        <div className="absolute inset-0 bg-gray-900 translate-x-2 translate-y-2 rounded-xl z-0" />

        {/* 主容器 */}
        <div className="relative z-10 border-[3px] border-gray-900 bg-[#fff4da] rounded-xl overflow-hidden py-4 px-2">
          {/* 左/右 按鈕：改用圖示 & 固定在左右兩邊 */}
          <div className="absolute left-4 top-1/2 -translate-y-1/2 z-20">
            <Button size="sm" variant="cancel" onClick={handlePrev}>
              <img src="chevron-left.svg" alt="Previous" />
            </Button>
          </div>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 z-20">
            <Button size="sm" variant="warning" onClick={handleNext}>
              <img src="chevron-right.svg" alt="Next" />
            </Button>
          </div>

          {/* Slides 區域 */}
          <div className="flex items-center justify-center gap-4">
            {visibleSlides.map((slideContent, idx) => (
              <AnimatePresence key={currentIndex + "-" + idx} mode="popLayout">
                <motion.div
                  data-active-slide
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -100, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  drag={enableDrag && slidesToShow === 1 ? "x" : false}
                  dragConstraints={dragConstraints}
                  onDragEnd={handleDragEnd}
                  className="relative"
                >
                  {slideContent}
                </motion.div>
              </AnimatePresence>
            ))}
          </div>

          {/* 頁數指示點 */}
          <div className="flex gap-2 justify-center mt-4">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => handleDotClick(i)}
                className={clsx(
                  "w-2.5 h-2.5 rounded-full border-[3px] border-gray-900",
                  currentIndex === i ? "bg-[#FE4A60]" : "bg-gray-300"
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
