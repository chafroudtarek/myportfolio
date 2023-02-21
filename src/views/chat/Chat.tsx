import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import Room from "./components/room/Room";

const socket = io("http://localhost:5050", {});

function Chat() {
  const [messages, setMessages] = useState<any[]>([]);
  const [receivedMessages, setReceivedMessages] = useState<any[]>([]);

  useEffect(() => {
    socket.on("connection", () => {
      console.log("Connected to server");
    });

    // socket.on("receiveMessage", ({ chatId, message }) => {
    //   console.log(`Received message in chat ${chatId}: ${message.text}`);
    //   setReceivedMessages((messages) => [...messages, message]);
    // });

    // socket.on("errorMessage", ({ error }) => {
    //   console.error(`Received error message: ${error}`);
    // });

    return () => {
      socket.off("connect");
      socket.off("receiveMessage");
      socket.off("errorMessage");
    };
  }, []);

  const sendMessage = () => {
    console.log(" i send the message");
    // Emit the 'message' event to the server with the message text
    socket.emit("sendMessage", {
      chatId: "63f3849ab340f638405af7d9",
      userId: "63ef91072f25519f033baf1f",
      text: "heeeeeey",
    });
  };

  return (
    <div>
      <Room />
      {/* <ul>
        {messages.map((message: any, index) => (
          <li key={index}>{message.text}</li>
        ))}
      </ul>

      <button onClick={() => sendMessage()}>Send</button> */}
    </div>
  );
}

export default Chat;
