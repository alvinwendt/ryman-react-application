import { Link } from "react-router-dom"

export const Event = ({ eventId, eventType, eventName, eventImage, eventDate, eventTime }) => {

    return <section className="event">
        <p className="eventType">{eventType}</p>
        <h3 className="eventName">{eventName}</h3>
        <img src={eventImage}></img>
            <div>{eventDate} at {eventTime}</div>
        {/* <button onClick={() => navigate(`/events/${eventId}`)}>MORE INFO</button> */}
        < Link to={`/events/${eventId}`}>MORE INFO </Link>
    </section>
}