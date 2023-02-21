import React from "react";
import Plus from "../../../../assets/icons/plus.png";
import Icon from "../../../../assets/images/reddit.png";
import RoomCard from "../../../../components/roomCard/RoomCard";
const Room = () => {
  return (
    <div className="rooms_container">
      <div className="roomAdd__card">
        <img src={Plus} alt="" />
      </div>
      <RoomCard image={Icon} title="The Best" />
    </div>
  );
};

export default Room;
