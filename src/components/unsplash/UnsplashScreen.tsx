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
  const [move, setMove] = useState(false);
  const navigate = useNavigate();
  const [play] = useSound(Boom);

  if (move) {
    return <SpaceScreen />;
  }
  return (
    <div className="full_container">
      <StarField numStars={300} />
      <>
        <Loader />
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
    </div>
  );
};
