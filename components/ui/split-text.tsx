'use client'

import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export interface SplitTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  duration?: number;
  ease?: string | ((t: number) => number);
  splitType?: 'chars' | 'words' | 'lines' | 'words, chars';
  from?: gsap.TweenVars;
  to?: gsap.TweenVars;
  threshold?: number;
  rootMargin?: string;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  textAlign?: React.CSSProperties['textAlign'];
  onLetterAnimationComplete?: () => void;
}

const SplitText: React.FC<SplitTextProps> = ({
  text,
  className = '',
  style: customStyle,
  delay = 100,
  duration = 0.6,
  ease = 'power3.out',
  splitType = 'chars',
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = '-100px',
  tag = 'p',
  textAlign = 'center',
  onLetterAnimationComplete
}) => {
  const ref = useRef<HTMLElement>(null);
  const animationCompletedRef = useRef(false);
  const [fontsLoaded, setFontsLoaded] = useState<boolean>(false);

  useEffect(() => {
    if (document.fonts.status === 'loaded') {
      setFontsLoaded(true);
    } else {
      document.fonts.ready.then(() => {
        setFontsLoaded(true);
      });
    }
  }, []);

  useGSAP(
    () => {
      if (!ref.current || !text || !fontsLoaded) return;
      const el = ref.current;
      
      // Prevent scroll jump on load
      ScrollTrigger.config({ autoRefreshEvents: 'visibilitychange,DOMContentLoaded,load' });

      // Simple split implementation without GSAP SplitText plugin
      const originalHTML = el.innerHTML;
      let targets: HTMLElement[] = [];

      if (splitType.includes('chars')) {
        // Split by characters, handling emojis properly and keeping words together
        const words = text.split(' ');
        el.innerHTML = words
          .map((word) => {
            const chars = Array.from(word); // Use Array.from to handle emojis correctly
            const charsHTML = chars
              .map((char) => {
                // Check if it's an emoji (Unicode range)
                const isEmoji = /\p{Emoji}/u.test(char);
                if (isEmoji) {
                  return `<span class="split-char split-emoji" style="display: inline-block; opacity: 0; will-change: transform, opacity; transform: translate3d(0,0,0);">${char}</span>`;
                }
                return `<span class="split-char" style="display: inline-block; opacity: 0; will-change: transform, opacity; transform: translate3d(0,0,0);">${char}</span>`;
              })
              .join('');
            // Wrap each word in a container with inline-block to prevent word breaking
            return `<span class="split-word-wrapper" style="display: inline-block; white-space: nowrap;">${charsHTML}</span>`;
          })
          .join('<span class="split-char" style="display: inline-block; opacity: 0; will-change: transform, opacity; transform: translate3d(0,0,0);">&nbsp;</span>');
        targets = Array.from(el.querySelectorAll('.split-char'));
      } else if (splitType.includes('words')) {
        // Split by words
        const words = text.split(' ');
        el.innerHTML = words
          .map((word) => `<span class="split-word" style="display: inline-block; opacity: 0;">${word}&nbsp;</span>`)
          .join('');
        targets = Array.from(el.querySelectorAll('.split-word'));
      }

      if (targets.length === 0) return;

      // Check if element is in viewport on load
      const rect = el.getBoundingClientRect();
      const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;

      if (isInViewport) {
        // Animate immediately if already in viewport
        gsap.fromTo(
          targets,
          { ...from, force3D: true },
          {
            ...to,
            force3D: true,
            duration,
            ease,
            stagger: delay / 1000,
            onComplete: () => {
              animationCompletedRef.current = true;
              onLetterAnimationComplete?.();
            },
          }
        );
      } else {
        // Use ScrollTrigger if not in viewport
        const startPct = (1 - threshold) * 100;
        const marginMatch = /^(-?\d+(?:\.\d+)?)(px|em|rem|%)?$/.exec(rootMargin);
        const marginValue = marginMatch ? parseFloat(marginMatch[1]) : 0;
        const marginUnit = marginMatch ? marginMatch[2] || 'px' : 'px';
        const sign =
          marginValue === 0
            ? ''
            : marginValue < 0
              ? `-=${Math.abs(marginValue)}${marginUnit}`
              : `+=${marginValue}${marginUnit}`;
        const start = `top ${startPct}%${sign}`;

        gsap.fromTo(
          targets,
          { ...from, force3D: true },
          {
            ...to,
            force3D: true,
            duration,
            ease,
            stagger: delay / 1000,
            scrollTrigger: {
              trigger: el,
              start,
              once: true,
              fastScrollEnd: true,
              preventOverlaps: true,
              invalidateOnRefresh: false,
            },
            onComplete: () => {
              animationCompletedRef.current = true;
              onLetterAnimationComplete?.();
            },
          }
        );
      }

      return () => {
        ScrollTrigger.getAll().forEach(st => {
          if (st.trigger === el) st.kill();
        });
        el.innerHTML = originalHTML;
      };
    },
    {
      dependencies: [
        text,
        delay,
        duration,
        ease,
        splitType,
        JSON.stringify(from),
        JSON.stringify(to),
        threshold,
        rootMargin,
        fontsLoaded,
        onLetterAnimationComplete,
        JSON.stringify(customStyle)
      ],
      scope: ref
    }
  );

  const style: React.CSSProperties = {
    textAlign,
    wordWrap: 'break-word',
    opacity: fontsLoaded ? 1 : 0,
    transition: 'opacity 0.1s ease',
    overflow: 'visible',
    ...customStyle,
  };
  const classes = `split-parent inline-block whitespace-normal ${className}`;

  const commonProps = {
    style,
    className: classes,
    children: text,
  };

  // Return appropriate element based on tag
  switch (tag) {
    case 'h1':
      return <h1 ref={ref as React.Ref<HTMLHeadingElement>} {...commonProps} />;
    case 'h2':
      return <h2 ref={ref as React.Ref<HTMLHeadingElement>} {...commonProps} />;
    case 'h3':
      return <h3 ref={ref as React.Ref<HTMLHeadingElement>} {...commonProps} />;
    case 'h4':
      return <h4 ref={ref as React.Ref<HTMLHeadingElement>} {...commonProps} />;
    case 'h5':
      return <h5 ref={ref as React.Ref<HTMLHeadingElement>} {...commonProps} />;
    case 'h6':
      return <h6 ref={ref as React.Ref<HTMLHeadingElement>} {...commonProps} />;
    case 'p':
      return <p ref={ref as React.Ref<HTMLParagraphElement>} {...commonProps} />;
    case 'span':
      return <span ref={ref as React.Ref<HTMLSpanElement>} {...commonProps} />;
    default:
      return <p ref={ref as React.Ref<HTMLParagraphElement>} {...commonProps} />;
  }
};

export default SplitText;

