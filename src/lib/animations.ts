import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const fadeUpPreset = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
};

export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
};

export const slideInLeft = {
  initial: { opacity: 0, x: -80 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
};

export const slideInRight = {
  initial: { opacity: 0, x: 80 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
};

export function createScrollTriggerFadeUp(
  element: string | Element,
  options?: gsap.TweenVars
) {
  return gsap.fromTo(
    element,
    { opacity: 0, y: 60 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: element,
        start: "top 85%",
        end: "top 50%",
        toggleActions: "play none none reverse",
      },
      ...options,
    }
  );
}

export function createLetterScatterAnimation(
  letters: Element[],
  positions: { x: number; y: number; rotate: number }[],
  options?: gsap.TweenVars
) {
  return gsap.to(letters, {
    duration: 0.8,
    ease: "back.out(1.7)",
    stagger: 0.03,
    ...options,
    ...positions.reduce(
      (acc, pos, i) => {
        if (letters[i]) {
          gsap.to(letters[i], {
            x: pos.x,
            y: pos.y,
            rotation: pos.rotate,
            duration: 0.8,
            ease: "back.out(1.7)",
            delay: i * 0.03,
          });
        }
        return acc;
      },
      {} as Record<string, unknown>
    ),
  });
}

export { gsap, ScrollTrigger };
