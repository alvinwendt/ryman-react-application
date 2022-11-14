import { useEffect, useState } from "react";
import "./Events.css";
import { formatInTimeZone } from "date-fns-tz"
import { Link } from "react-router-dom"

export const EventList = () => {
  const [events, setEvents] = useState([]);

  const rymanUser = localStorage.getItem("ryman_user")
  const rymanUserObject = JSON.parse(rymanUser)

  const fetchEvents = async () => {
      const response = await fetch(
        "http://localhost:8088/events/?_expand=eventType&_sort=dateTime"
      );
      const eventArray = await response.json();
      setEvents(eventArray);
  }

  useEffect(() => {
      fetchEvents();
  }, []);

  const editButton = (eventId) => {
        return <Link to={`/editEvent/${eventId}`}><span className="material-symbols-outlined blackIcon editEventButton">edit_note</span></Link>
}

  const deleteButton = (eventId) => {
        return <Link className="material-symbols-outlined blackIcon" onClick={() => {
            const deleteEvent = async () => {
                const options = {
                  method: "DELETE"
                }
                await fetch(`http://localhost:8088/events/${eventId}`, options)
                fetchEvents()
            }
            deleteEvent()
        }}>delete</Link>
}

  const formatEventDateTime = (eventDateTime) => {

    const convertDateTime = new Date(eventDateTime)

    return formatInTimeZone(convertDateTime, 'America/Chicago', "LLLL d, yyyy 'at' h:mm a zzz")
  }

  return (
    <div className="eventsContainer">
      <article className="events">
      {
      events.map((event) => {
          return <section className="event" key={`event--${event.id}`}>
              <div className="eventDetails">
                <div className="float-container">
                  <p className="eventType child">{event.eventType.name}</p>
                  <div className="buttons child">
                  {
                    rymanUserObject.staff ? (
                      <>
                      {editButton(event.id)}
                      </>
                      ) : (
                        <></>
                      )
                  }
                  {
                    rymanUserObject.staff ? (
                      <>
                        {deleteButton(event.id)}
                      </>
                    ) : <></>
                  }
                  </div>
                </div>
                  <h3 className="eventName">{event.eventName}</h3>
                  <p className="eventDateTime">{formatEventDateTime(event.dateTime)}</p>
                  <Link to={`/events/${event.id}`} className="moreInfoLink"><button className="moreInfo">MORE INFO</button></Link>

              </div>
              <div className="eventImage">
                  <img src={event.imageURL}></img>
              </div>
          </section>
      })
      }
      </article>
    </div>
  );
};
