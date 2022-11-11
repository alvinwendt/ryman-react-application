import { format } from "date-fns"

export const Event = ({ eventType, eventName, eventImage, eventDate, eventTime }) => {

    const convertEventDate = new Date(eventDate)
    console.log(`converted event date`,convertEventDate)
    const eventDateFormatted = format(convertEventDate, 'LLLL d, yyyy')
    const convertEventTime = new Date(eventTime)
    console.log(`new event time`,convertEventTime)

    return <section className="event">
        <div className="eventDetails">
            <p className="eventType">{eventType}</p>
            <h3 className="eventName">{eventName}</h3>
            <p className="eventDateTime">{eventDateFormatted} at {eventTime}</p>
            <button className="moreInfo">MORE INFO</button>
        </div>
        <div className="eventImage">
            <img src={eventImage}></img>
        </div>
    </section>
}