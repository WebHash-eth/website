import React, { useEffect, useRef, useState, ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface TextRevealAnimationProps {
  children: ReactNode;
}

const TextRevealAnimation: React.FC<TextRevealAnimationProps> = ({
  children,
}) => {
  const textRef = useRef<HTMLSpanElement>(null);
  const [animatedText, setAnimatedText] = useState<string>("");

  useEffect(() => {
    const text = React.Children.toArray(children)
      .map((child) => {
        if (typeof child === "string") {
          return child;
        } else if (React.isValidElement<{ children?: ReactNode }>(child)) {
          return child.props.children ? String(child.props.children) : "";
        }
        return "";
      })
      .join("");

    let scrambledTimeline: gsap.core.Timeline;

    const scrambleText = () => {
      if (scrambledTimeline) scrambledTimeline.kill();

      scrambledTimeline = gsap.timeline({
        onComplete: () => {
          scrambledTimeline.kill();
          return;
        },
      });

      const chars =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
      const minScramble = 2;
      const maxScramble = 5;

      setAnimatedText(Array(text.length).fill(" ").join(""));

      const lines = text.split("\n");

      lines.forEach((line) => {
        const charsArray = line.split("");

        charsArray.forEach((_, index) => {
          const scrambleLength =
            Math.floor(Math.random() * (maxScramble - minScramble + 1)) +
            minScramble;

          const startIndex = Math.max(
            0,
            index - Math.floor(scrambleLength / 2)
          );

          const endIndex = Math.min(
            charsArray.length - 1,
            index + Math.floor(scrambleLength / 2)
          );

          scrambledTimeline.to(
            {},
            {
              duration: 0.02,
              onUpdate: function () {
                const randomChars = Array.from(
                  { length: scrambleLength },
                  () => chars[Math.floor(Math.random() * chars.length)]
                );

                setAnimatedText((prevText) => {
                  let updatedText = prevText.split("");
                  for (let i = startIndex; i <= endIndex; i++) {
                    if (i >= startIndex && i <= endIndex) {
                      updatedText[i] =
                        randomChars[
                          Math.floor(Math.random() * randomChars.length)
                        ];
                    }
                  }
                  return updatedText.join("");
                });
              },
              onComplete: function () {
                setAnimatedText((prevText) => {
                  let updatedText = prevText.split("");
                  for (let i = startIndex; i <= endIndex; i++) {
                    updatedText[i] = charsArray[i];
                  }
                  return updatedText.join("");
                });
              },
            },
            "+=0.02"
          );
        });
      });
    };

    ScrollTrigger.create({
      trigger: textRef.current,
      start: "top 80%",
      end: "bottom top",
      onEnter: scrambleText,
      onEnterBack: scrambleText,
      toggleActions: "play none none none",
    });

    return () => {
      if (scrambledTimeline) scrambledTimeline.kill();
    };
  }, [children]);

  return (
    <span ref={textRef} className="inline whitespace-pre-line">
      {animatedText || children}
    </span>
  );
};

export default TextRevealAnimation;
