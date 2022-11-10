export const Event = ({ eventType, eventName, eventImage, eventDate, eventTime }) => {

    return <section className="event">
        <div className="eventDetails">
            <p className="eventType">{eventType}</p>
            <h3 className="eventName">{eventName}</h3>
            <p className="eventDateTime">{eventDate} at {eventTime}</p>
            <button className="moreInfo">MORE INFO</button>
        </div>
        <div className="eventImage">
            <img src={eventImage}></img>
        </div>
    </section>
}