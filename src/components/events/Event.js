export const Event = ({ eventType, eventName, eventImage, eventDate, eventTime }) => {

    return <section className="event">
        <p className="eventType">{eventType}</p>
        <h3 className="eventName">{eventName}</h3>
        <img src={eventImage}></img>
            <div>{eventDate} at {eventTime}</div>
        <button>MORE INFO</button>
    </section>
}