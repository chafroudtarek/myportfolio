import { useEffect } from "react";

const SpaceScreen = () => {
  useEffect(() => {
    const starField = document.querySelector(".stars");

    for (let i = 0; i < 500; i++) {
      const star = document.createElement("div");
      star.className = "stary-star";
      starField?.appendChild(star);

      const initialTop = Math.random() * 100;
      const initialLeft = Math.random() * 100;
      star.style.top = `${initialTop}vh`;
      star.style.left = `${initialLeft}vw`;

      star.style.animationDuration = `${Math.random() * 5 + 2}s`;
      star.style.animationDelay = `-${Math.random()}s`;
    }
  }, []);

  return (
    <div className="circles">
      <div className="stars"></div>
    </div>
  );
};

export default SpaceScreen;
