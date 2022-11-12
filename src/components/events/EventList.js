import { useEffect, useState } from "react";
import "./Events.css";
import { Event } from "./Event";

export const EventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "http://localhost:8088/events/?_expand=eventType"
      );
      const eventArray = await response.json();
      setEvents(eventArray);
    };
    fetchData();
  }, []);

  // Liked Experimentation Section-----------------------

  // TODO Create Use State
  const [likedItems, setLikedItems] = useState([]);

  //   //TODO pull in user information
  //   const localRymanUser = localStorage.getItem("ryman_user");
  //   const rymanUserObject = JSON.parse(localRymanUser);

  useEffect(() => {
    const pullLikes = async () => {
      const response = await fetch("http://localhost:8088/likes");
      let data = await response.json();
      setLikedItems(data);
    };
    pullLikes();
  }, []);

  // Liked Experimentation Section-----------------------

  return (
    <>
      <article className="events">
        {events.map((event) => {
          return (
            <Event
              key={`event--${event.id}`}
              eventType={event.eventType.name}
              eventName={event.eventName}
              eventImage={event.imageURL}
              eventDate={event.date}
              eventTime={event.time}
            />
          );
        })}
      </article>
      {/* <article>
        {likedItems.map((item) => {
          return (
            <section className="event">
              <p className="eventType">{item.eventId}</p>
              <h3 className="eventName">{item.id}</h3>
            </section>
          );
        })}
      </article> */}
    </>
  );
};
