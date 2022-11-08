import { useState } from "react";

export const LikedItems = () => {
  // TODO Create Use State
  const [likedItems, setLikedItems] = useState({
    userId: 0,
    eventId: 0,
  });
  // TODO Use state for checkbox status
  const [checkedState, setCheckedState] = useState(
    new Array(events.length).fill(false)
  );

  //TODO pull in user information
  const localRymanUser = localStorage.getItem("ryman_user");
  const rymanUserObject = JSON.parse(localRymanUser);

  //TODO API GET call to pull in liked items list for user

  //TODO API post call to add liked item
  const sendData = async () => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(ticketToSendToAPI),
    };
    const response = await fetch(`http://localhost:8088/likes`, options);
    await response.json();
  };

  sendData();

  //TODO API delete call to delete like when unliked
};
