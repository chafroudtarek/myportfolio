/*eslint-disable */
import React, { useState, useEffect } from "react";
import useSound from "use-sound";
import typeWriter from "../../assets/sounds/typewriter.mp3";
import Boom from "../../assets/sounds/boom.mp3";
import { useNavigate } from "react-router-dom";
import SpaceScreen from "../space/Space";
import Loader from "../Loader/Loader";
import { StarField } from "../StarryBackground/StarryBackground";

export const UnsplashScreen = () => {
  const [displayText, setDisplayText] = useState(false);
  const [move, setMove] = useState(false);
  const [loading, setLoading] = useState(true);

  const [playSound] = useSound(typeWriter);
  const [play] = useSound(Boom);
  const navigate = useNavigate();
  playSound();
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setDisplayText(true);
    }, 5000);
    // setTimeout(() => {
    //   stop();
    // }, 10000);
  });

  if (loading) {
    return (
      <>
        <StarField numStars={300} /> <Loader />
      </>
    );
  }
  if (move) {
    return <SpaceScreen />;
  }
  return (
    <div className="full_container">
      <StarField numStars={300} />
      {displayText && (
        <>
          <div className="typewriter">
            <h1>Welcome, heroes! Dive into my world 🎧</h1>
          </div>
          <div
            className="button"
            onClick={() => {
              play();
              setMove(true);
              setTimeout(() => {
                navigate("/home");
              }, 3000);
            }}
          >
            {" "}
            let's explore
          </div>
        </>
      )}
    </div>
  );
};
