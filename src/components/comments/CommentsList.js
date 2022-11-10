import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import "./Comments.css"

export const CommentsList = () => {
    const {eventId} = useParams()
    const [eventComments, setEventComments] = useState({})
    const [event, setEvent] = useState({})

    useEffect(
      () => {
        const fetchData = async () => {
            const response = await fetch(`http://localhost:8088/comments?eventId=${eventId}`)
            const eventCommentsArray = await response.json()
            setEventComments(eventCommentsArray)
        } 
        fetchData()

        },
        [eventId]
    ) 

    useEffect(
      () => {
        const fetchData = async () => {
            const response = await fetch(`http://localhost:8088/events?_expand=eventType&id=${eventId}`)
            const eventArray = await response.json()
            setEvent(eventArray[0])
        } 
        fetchData()

        },
        [eventId]
    ) 

    return <> 

        <section className="event">
            <p className="eventType">{event.eventType.name}</p>
            <h3 className="eventName">{event.eventName}</h3>
            <img src={event.imageURL}></img>
                <div>{event.date} at {event.time}</div>
        </section>

      <h2>Comments</h2>
      <article className="comments">
        {
          eventComments.map(
            (comment) => {
              return <section className="comment" key={`comment--${comment.id}`}>
                <section>{comment.comment}</section>
              </section>
            }
          )
        }
      </article>
    </>
}