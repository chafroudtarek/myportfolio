import { useEffect } from "react";

export const StarField = ({ numStars }: { numStars: number }) => {
  useEffect(() => {
    const starsContainer = document.querySelector(".star-field");

    for (let i = 0; i < numStars; i++) {
      const star = document.createElement("div");
      star.className = "star";
      starsContainer?.appendChild(star);

      const initialTop = Math.random() * 100;
      const initialLeft = Math.random() * 100;
      star.style.top = `${initialTop}%`;
      star.style.left = `${initialLeft}%`;

      star.style.animationDuration = `${Math.random() * 5 + 2}s`;
      star.style.animationDelay = `-${Math.random()}s`;
    }
  }, [numStars]);

  return <div className="star-field"></div>;
};
