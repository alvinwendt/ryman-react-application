import { formatInTimeZone } from "date-fns-tz"

export const Event = ({ eventDateTime, eventType, eventName, eventImage }) => {

    const convertDateTime = new Date(eventDateTime)
    const eventDateInTimeZone = formatInTimeZone(convertDateTime, 'America/Chicago', "LLLL d, yyyy 'at' h:mm a zzz")

    return <section className="event">
        <div className="eventDetails">
            <p className="eventType">{eventType}</p>
            <h3 className="eventName">{eventName}</h3>
            <p className="eventDateTime">{eventDateInTimeZone}</p>
            <button className="moreInfo">MORE INFO</button>
        </div>
        <div className="eventImage">
            <img src={eventImage}></img>
        </div>
    </section>
}