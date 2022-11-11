import { format } from "date-fns"

export const Event = ({ eventDateTime, eventType, eventName, eventImage }) => {

    const convertDateTime = new Date(eventDateTime)
    const eventDateTimeFormatted = format(convertDateTime, "LLLL d, yyyy 'at' h:mm a")

    return <section className="event">
        <div className="eventDetails">
            <p className="eventType">{eventType}</p>
            <h3 className="eventName">{eventName}</h3>
            <p className="eventDateTime">{eventDateTimeFormatted}</p>
            <button className="moreInfo">MORE INFO</button>
        </div>
        <div className="eventImage">
            <img src={eventImage}></img>
        </div>
    </section>
}