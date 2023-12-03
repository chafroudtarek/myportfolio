/*eslint-disable */
import React, { useState, useEffect } from "react";
import useSound from "use-sound";
import typeWriter from "../../assets/sounds/typewriter.mp3";
import Boom from "../../assets/sounds/boom.mp3";
import { useNavigate } from "react-router-dom";

export const UnsplashScreen = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = useState(false);
  const [playSound, { stop }] = useSound(typeWriter);
  const [play] = useSound(Boom);
  const navigate = useNavigate();
  playSound();
  useEffect(() => {
    setTimeout(() => {
      setDisplayText(true);
    }, 5000);
    setTimeout(() => {
      stop();
    }, 10000);
  });

  // return <div>"{displayText}"</div>;
  return (
    <div className="full_container">
      {displayText && (
        <>
          <div className="typewriter">
            <h1>Welcome, heroes! Dive into my world 🎧</h1>
          </div>
          <div
            className="button"
            onClick={() => {
              play();
              setTimeout(() => {
                navigate("/projects");
              }, 500);
            }}
          >
            {" "}
            let's explore
          </div>
        </>
      )}

      {/* <button onClick={playSound as any}>Play Sound</button> */}
    </div>
  );
};
