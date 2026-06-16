"use client";

import { FC, ReactNode, useRef } from "react";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface TextRevealByWordProps {
  text: string;
  className?: string;
}

const TextRevealByWord: FC<TextRevealByWordProps> = ({ text, className }) => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });
  const words = text.split(" ");

  return (
    <div ref={targetRef} className={cn("relative z-0 h-[180vh]", className)}>
      <div className="sticky top-0 mx-auto flex h-screen max-w-5xl items-center justify-center bg-transparent px-4 py-20">
        <p className="flex flex-wrap justify-center p-4 text-center text-3xl font-black leading-[1.08] tracking-[-0.065em] text-black/15 md:p-8 md:text-5xl lg:text-6xl">
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            return (
              <Word key={`${word}-${i}`} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            );
          })}
        </p>
      </div>
    </div>
  );
};

interface WordProps {
  children: ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
}

const Word: FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0.18, 1]);
  return (
    <span className="relative mx-1.5 lg:mx-2.5">
      <span className="absolute opacity-30">{children}</span>
      <motion.span style={{ opacity }} className="text-black">
        {children}
      </motion.span>
    </span>
  );
};

export { TextRevealByWord };
