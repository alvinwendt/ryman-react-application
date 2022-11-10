import { useNavigate } from "react-router-dom"



export const Event = ({ eventId, eventType, eventName, eventImage, eventDate, eventTime }) => {
    const navigate = useNavigate()
    return <section className="event">
        <div className="eventDetails">
            <p className="eventType">{eventType}</p>
            <h3 className="eventName">{eventName}</h3>
            <p className="eventDateTime">{eventDate} at {eventTime}</p>
            <button className="moreInfo" onClick={() => navigate(`/events/${eventId}`)}>MORE INFO</button>
        </div>
        <div className="eventImage">
            <img src={eventImage}></img>
        </div>
    </section>
}