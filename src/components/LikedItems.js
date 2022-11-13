import { useState, useEffect } from "react";
import { Event } from "../components/events/Event";

export const LikedItems = () => {
  // Pull in user information
  const rymanUser = localStorage.getItem("ryman_user");
  const rymanUserObject = JSON.parse(rymanUser);

  // // TODO Create Use State for Liked events list
  // const [likedEvents, setLikedEvents] = useState([]);

  // // TODO Create Use State
  // const [likedItems, setLikedItems] = useState({
  //   userId: 0,
  //   eventId: 0,
  // });

  // TODO Create Use State for eventIds
  const [eventTypes, setEventTypes] = useState({});

  //TODO API GET call liked events based on user
  const pullLikedEvents = async () => {
    const response = await fetch(`http://localhost:8088/likes?_expand=event`);
    let data = await response.json();
    console.log(data);
    let filteredData = data.filter(
      (user) => user.userId === rymanUserObject.id
    );
    setLikedEvents(filteredData);
  };

  //TODO API GET call liked events based on user
  const pullEventTypes = async () => {
    const response = await fetch(`http://localhost:8088/eventTypes`);
    let data = response.json();
    setEventTypes(data);
  };

  useEffect(() => {
    pullLikedEvents();
    pullEventTypes();
  }, []);

  // //TODO API GET call to pull in liked items list for user
  // const pullLikes = async () => {
  //   const response = await fetch(`http://localhost:8088/likes`);
  //   let data = response.json();
  //   setLikedItems(data);
  // };

  // pullData();

  // //TODO API post call to add liked item
  // const sendLike = async () => {
  //   const options = {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(ticketToSendToAPI),
  //   };
  //   const response = await fetch(`http://localhost:8088/likes`, options);
  //   await response.json();
  // };

  // sendData();

  // //TODO API delete call to delete like when unliked
  // const deleteLike = async () => {
  //   const options = {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(ticketToSendToAPI),
  //   };
  //   const response = await fetch(`http://localhost:8088/likes`, options);
  //   await response.json();
  // };
  // //TODO

  return (
    <>
      <article className="events">
        {if (likedEvents.length = 0) {<h2>No Liked Events</h2>}
        else {
          
        }
      }
      </article>
    </>
  );
};
