import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import '../EventsForm.css';

export const EditEvent = () => {

    const {eventId} = useParams()
    const [rymanEvent, update] = useState({
        eventName: '',
        dateTime: '',
        price: 0.0,
        eventTypeId: 0,
        imageURL: ''
    })
    const [eventTypes, setEventTypes] = useState([]);
    const navigate = useNavigate();

    useEffect(
        () => {
            const fetchEvent = async () => {
                const response = await fetch(`http://localhost:8088/events?id=${eventId}`)
                const event = await response.json()
                update(event[0])
              }
              fetchEvent()
        },
        [eventId]
    )

    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch(`http://localhost:8088/EventTypes`);
        const eventTypeArray = await response.json();
        setEventTypes(eventTypeArray);
      };
      fetchData();
    }, []);

  const handleSaveButtonClick = (event) => {
    event.preventDefault();

    console.log(`rymanEvent:`,rymanEvent)

    const saveEvent = async () => {
      const options = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(rymanEvent)
    }
    const response = await fetch (`http://localhost:8088/events/${eventId}`, options)
    await response.json()
    navigate('/')
    }
    saveEvent()
  }
    
  return (
    <form className="eventsForm">
      <h2 className="eventsForm__title">Edit Event</h2>
      <fieldset className="eventField">
        <div className="form-group">
          <label htmlFor="eventsName">Event Name:</label>
          <input
            required
            autoFocus
            type="text"
            className="form-control"
            placeholder="Event Name"
            value={rymanEvent.eventName}
            onChange={(event) => {
              const copy = { ...rymanEvent };
              copy.eventName = event.target.value;
              update(copy);
            }}
          />
        </div>
      </fieldset>

      <fieldset className="eventField">
        <div className="form-group">
          <label htmlFor="time">Date & Time:</label>
          <input
            type="datetime-local"
            required
            autoFocus
            //type="text"
            className="form-control"
            //placeholder="Time"
            value={rymanEvent.dateTime}
            onChange={(event) => {
              const copy = { ...rymanEvent };
              copy.dateTime = event.target.value;
              update(copy);
            }}
          />
        </div>
      </fieldset>

      <fieldset className="eventField">
        <div className="form-group">
          <label htmlFor="price">Price:</label>
          <input
            required
            autoFocus
            type="number"
            step="0.1"
            className="form-control"
            //placeholder="Time"
            value={rymanEvent.price}
            onChange={(event) => {
              const copy = { ...rymanEvent };
              copy.price = parseFloat(event.target.value);
              update(copy);
            }}
          />
        </div>
      </fieldset>

      <fieldset className="eventField">
        <div className="form-group">
          <label htmlFor="type">Event Type:</label>
          <select
            className="form-control"
            value={rymanEvent.eventTypeId}
            onChange={(event) => {
              const copy = { ...rymanEvent };
              copy.eventTypeId = parseInt(event.target.value);
              update(copy);
            }}
          >
            {eventTypes.map((type) => {
              return (
                <option className="eventType" key={type.id} value={type.id}>
                  {type.name}
                </option>
              );
            })}
          </select>
        </div>
      </fieldset>


    

      <fieldset className="eventField">
        <div className="form-group">
          <label htmlFor="type">Image URL:</label>
          <input
            required
            autoFocus
            className="form-control"
            value={rymanEvent.imageURL}
            onChange={(event) => {
              const copy = { ...rymanEvent };
              copy.imageURL = event.target.value;
              update(copy);
            }}
          />
        </div>
      </fieldset>

      <button
        onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
        className="btn btn-primary"
      >
        Save Event
      </button>
    </form>
  );
};