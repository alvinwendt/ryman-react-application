import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const EventDetails = () => {
    const {eventId} = useParams()
    const [event, setEvent] = useState({})
    const [comments, setComments] = useState([])

    useEffect(
        () => {
            const fetchData = async () => {
                const response = await fetch(`http://localhost:8088/events?_expand=eventType&id=${eventId}`)
                const singleEvent = await response.json()
                setEvent(singleEvent[0])
              }
              fetchData()
        },
        [eventId]
    )

    useEffect(
        () => {
            const fetchData = async () => {
                const response = await fetch(`http://localhost:8088/comments?eventId=${eventId}`)
                console.log(`commentResponse`,response)
                const eventComments = await response.json()
                setComments(eventComments)
              }
              fetchData()
        },
        [eventId]
    )

    return <article>

        <h1>{event.eventName}</h1>

        {
            comments.map((comment) => {
                return (
                    <ul>
                        <li>{comment.comment}</li>
                    </ul>
                )
            })
        }

    </article>
    
}