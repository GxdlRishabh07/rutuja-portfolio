"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  staggerDelay?: number;
  once?: boolean;
}

export default function AnimatedText({
  text,
  className = "",
  style,
  delay = 0,
  staggerDelay = 0.03,
  once = true,
}: AnimatedTextProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-60px" });

  // Split text into segments: words and emojis
  const segments = text.split(/(\s+)/).filter(Boolean);

  return (
    <div ref={ref} className={className} style={style} aria-label={text}>
      {segments.map((segment, index) => {
        if (/^\s+$/.test(segment)) {
          return <span key={`space-${index}`}>{segment}</span>;
        }

        // Check if the segment contains an emoji
        const emojiRegex =
          /[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F1E0}-\u{1F1FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{FE00}-\u{FE0F}\u{1F900}-\u{1F9FF}\u{200D}\u{20E3}\u{1FA00}-\u{1FA6F}\u{1FA70}-\u{1FAFF}]/gu;
        const hasEmoji = emojiRegex.test(segment);

        const wordIndex =
          segments.slice(0, index).filter((s) => !/^\s+$/.test(s)).length;

        return (
          <motion.span
            key={`word-${index}`}
            style={{ display: "inline-block", whiteSpace: "pre" }}
            initial={{ opacity: 0, y: hasEmoji ? 20 : 10 }}
            animate={
              isInView
                ? {
                    opacity: 1,
                    y: 0,
                    scale: hasEmoji ? [0.5, 1.2, 1] : 1,
                  }
                : { opacity: 0, y: hasEmoji ? 20 : 10 }
            }
            transition={{
              duration: hasEmoji ? 0.5 : 0.4,
              delay: delay + wordIndex * staggerDelay,
              ease: hasEmoji ? [0.34, 1.56, 0.64, 1] : [0.22, 1, 0.36, 1],
            }}
          >
            {segment}{" "}
          </motion.span>
        );
      })}
    </div>
  );
}
