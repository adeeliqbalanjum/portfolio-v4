'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface Image {
  src: string;
  alt?: string;
}

interface ZoomParallaxProps {
  images: Image[];
}

const layouts = [
  { top: '0vh', left: '0vw', width: '25vw', height: '25vh' },
  { top: '-30vh', left: '5vw', width: '35vw', height: '30vh' },
  { top: '-10vh', left: '-25vw', width: '20vw', height: '45vh' },
  { top: '0vh', left: '27.5vw', width: '25vw', height: '25vh' },
  { top: '27.5vh', left: '5vw', width: '20vw', height: '25vh' },
  { top: '27.5vh', left: '-22.5vw', width: '30vw', height: '25vh' },
  { top: '22.5vh', left: '25vw', width: '15vw', height: '15vh' },
];

export function ZoomParallax({ images }: ZoomParallaxProps) {
  const container = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);
  const scales = [scale4, scale5, scale6, scale5, scale6, scale8, scale9];

  return (
    <div ref={container} className="zoom-parallax relative h-[300vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        {images.slice(0, 7).map(({ src, alt }, index) => {
          const layout = layouts[index % layouts.length];
          const scale = scales[index % scales.length];

          return (
            <motion.div
              key={`${alt || 'project'}-${index}`}
              style={{ scale }}
              className="absolute top-0 flex h-full w-full items-center justify-center will-change-transform"
            >
              <div
                className="zoom-parallax-card relative overflow-hidden"
                style={{
                  top: layout.top,
                  left: layout.left,
                  width: layout.width,
                  height: layout.height,
                }}
              >
                <img
                  src={src}
                  alt={alt || `Portfolio project ${index + 1}`}
                  className="h-full w-full object-cover"
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
