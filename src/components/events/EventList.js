import { useEffect, useState } from "react";
import "./Events.css"
import { Event } from "./Event";

export const EventList = () => {

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
        <div className="eventsContainer">
            <article className="events">
                {
                    events.map((event) => {
                        return (
                            <Event 
                                key={`event--${event.id}`}
                                eventType={event.eventType.name}
                                eventName={event.eventName}
                                eventImage={event.imageURL}
                                eventDateTime={event.dateTime}
                            />
                        )
                    })
                }
            </article>
        </div>
    )
}