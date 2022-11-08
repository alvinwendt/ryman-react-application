import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Events.css"

export const Events = () => {

    const [events, setEvents] = useState([])
    
    useEffect(
        () => {
            const fetchData = async() => {
                const response = await fetch ('http://localhost:8088/events/?_expand=eventType')
                const eventArray = await response.json()
                setEvents(eventArray)
            }
            fetchData()
        },
        []
    )

    return (
        <>
            <h1>Events</h1>
            <article className="events">
                {
                    events.map((event) => {
                        return (
                            <>
                            <p className="ticketsub">Live at the Ryman</p>
                            <h3 className="eventName">{event.eventName}</h3>
                            <img src={event.imageURL}></img>
                            <ul className="event" key={event.id}>
                                <li>Date: {event.date}</li>
                                <li>Time: {event.time}</li>
                                <li>Price: {event.price}</li>
                                <li>Type: {event.eventType.name}</li>
                            </ul>
                            </>
                        )
                    })
                }
            </article>
        </>
    )
}