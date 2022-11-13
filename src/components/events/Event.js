import { formatInTimeZone } from "date-fns-tz"
import { Link } from "react-router-dom"

export const Event = ({ eventId, eventDateTime, eventType, eventName, eventImage }) => {

    const convertDateTime = new Date(eventDateTime)
    const eventDateInTimeZone = formatInTimeZone(convertDateTime, 'America/Chicago', "LLLL d, yyyy 'at' h:mm a zzz")

    return <section className="event">
        <div className="eventDetails">
            <p className="eventType">{eventType}</p>
            <h3 className="eventName">{eventName}</h3>
            <p className="eventDateTime">{eventDateInTimeZone}</p>
            <Link to={`/events/${eventId}`} className="moreInfoLink"><button className="moreInfo">MORE INFO</button></Link>
        </div>
        <div className="eventImage">
            <img src={eventImage}></img>
        </div>
    </section>
}