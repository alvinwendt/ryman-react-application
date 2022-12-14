import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import "./Events.css";
import { formatInTimeZone } from "date-fns-tz";

export const EventDetails = () => {
  const { eventId } = useParams();
  const [eventComments, setEventComments] = useState([]);
  const [event, setEvent] = useState([]);

  const navigate = useNavigate();

  const fetchComments = async () => {
    const response = await fetch(
      `http://localhost:8088/comments?eventId=${eventId}&_expand=user`
    );
    const eventCommentsArray = await response.json();
    setEventComments(eventCommentsArray);
  };

  useEffect(() => {
    fetchComments();
  }, [eventId]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `http://localhost:8088/events?id=${eventId}&_expand=eventType`
      );
      const eventArray = await response.json();
      setEvent(eventArray);
    };
    fetchData();
  }, [eventId]);

  const rymanUser = localStorage.getItem("ryman_user");
  const rymanUserObject = JSON.parse(rymanUser);

  const eventIdObject = JSON.parse(eventId);

  const [newComment, setNewComment] = useState({
    comment: "",
    userId: rymanUserObject.id,
    eventId: eventIdObject,
  });

  const handleSaveButtonClick = (event) => {
    event.preventDefault();
    console.log("You clicked the button!");

    // TODO: Create the object to be saved to the API

    const commentToSendToAPI = {
      comment: newComment.comment,
      userId: newComment.userId,
      eventId: newComment.eventId,
    };

    // TODO: Perform the fetch() to POST the object to the API

    const sendData = async () => {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(commentToSendToAPI),
      };
      const response = await fetch(`http://localhost:8088/comments`, options);
      await response.json();
      fetchComments();
    };
    sendData();
    setNewComment({
      comment: "",
      userId: rymanUserObject.id,
      eventId: eventIdObject,
    });
  };

  const formatEventDateTime = (eventDateTime) => {
    const convertDateTime = new Date(eventDateTime);

    return formatInTimeZone(
      convertDateTime,
      "America/Chicago",
      "LLLL d, yyyy 'at' h:mm a zzz"
    );
  };

  const likedButton = () => {
    return (
      <Link
        className="material-symbols-outlined star"
        onClick={() => {
          const dataToSendToAPI = {
            userId: rymanUserObject.id,
            eventId: parseInt(eventId),
          };

          const likedEvent = async () => {
            const options = {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(dataToSendToAPI),
            };
            await fetch(`http://localhost:8088/likes`, options);
            navigate("/events/liked");
          };
          likedEvent();
        }}
      >
        star
      </Link>
    );
  };

  return (
    <>
      <section className="detailedEvent">
        {event.map((event) => {
          return (
            <article key={`event--${event.id}`}>
              <p className="eventTypeDetail">{event.eventType.name}</p>
              <h3 className="eventName">{event.eventName}</h3>
              <img src={event.imageURL}></img>
              <div className="eventDateTimeDetail">
                {formatEventDateTime(event.dateTime)}
              </div>
              <div className="eventDateTimeDetail">
                Ticket Price: ${event.price}
              </div>
            </article>
          );
        })}
        {likedButton()}
      </section>

      <section className="commentsSection">
        <h2 className="commentsTitle">Comments</h2>
        <article className="comments">
          {eventComments.map((comment) => {
            return (
              <section className="comment" key={`comment--${comment.id}`}>
                <section className="userComment">{comment.comment}</section>
                <section className="userName">
                  --{comment.user.fullName}--
                </section>
                {/* <Link to={`/comments/${comment.id}/edit`} className="editComment"><button className="editCommentButton">EDIT COMMENT</button></Link> */}
              </section>
            );
          })}
        </article>

        <form className="commentForm">
          <fieldset>
            <div className="form-group">
              <label className="newCommentsHeading" htmlFor="description">
                Add New Comment:{" "}
              </label>
              <input
                required
                autoFocus
                type="text"
                className="commentInput"
                placeholder="Add your comment here!"
                value={newComment.comment}
                onChange={(evt) => {
                  const copy = { ...newComment };
                  copy.comment = evt.target.value;
                  setNewComment(copy);
                }}
              />
            </div>
          </fieldset>

          <button
            onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
            className="btn btn-primary"
          >
            Save New Comment
          </button>
        </form>
      </section>
    </>
  );
};
