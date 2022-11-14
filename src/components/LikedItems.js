import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { formatInTimeZone } from "date-fns-tz";
// import { Event } from "../components/events/Event";

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

  // // TODO Create Use State for eventIds
  // const [eventTypes, setEventTypes] = useState({});

  // TODO Create Use State for eventIds
  const [likedEvents, setLikedEvents] = useState([]);

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

  // //TODO API GET call liked events based on user
  // const pullEventTypes = async () => {
  //   const response = await fetch(`http://localhost:8088/eventTypes`);
  //   let data = response.json();
  //   setEventTypes(data);
  // };

  useEffect(() => {
    pullLikedEvents();
    // pullEventTypes();
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

  const formatEventDateTime = (eventDateTime) => {
    const convertDateTime = new Date(eventDateTime);

    return formatInTimeZone(
      convertDateTime,
      "America/Chicago",
      "LLLL d, yyyy 'at' h:mm a zzz"
    );
  };

  return (
    // {
    //    if (likedEvents.length == 0) {return <h2>No Liked Events</h2>}
    // else {
    //   return (

    <div className="eventsContainer">
      <article className="events">
        {likedEvents.map((event) => {
          return (
            <section className="event" key={`event--${event.id}`}>
              <div className="eventDetails">
                <div className="float-container">
                  <p className="eventType child">{event.event.eventTypeId}</p>
                </div>
                <h3 className="eventName">{event.event.eventName}</h3>
                <p className="eventDateTime">
                  {formatEventDateTime(event.event.dateTime)}
                </p>
                <Link to={`/events/${event.event.id}`} className="moreInfoLink">
                  <button className="moreInfo">MORE INFO</button>
                </Link>
              </div>
              <div className="eventImage">
                <img src={event.event.imageURL}></img>
              </div>
            </section>
          );
        })}
      </article>
    </div>
  );
};
