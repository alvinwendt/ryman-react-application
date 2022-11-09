import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const EventsForm = () => {
  const [rymanEvent, update] = useState({
    eventName: '',
    date: '',
    time: '',
    price: 0.0,
    eventType: 0,
    imageURL: '',
  });

  const [eventTypes, setEventTypes] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:8088/EventTypes`);
      const eventTypeArray = await response.json();
      setEventTypes(eventTypeArray);
    };
    fetchData();
  }, []);

  //console.log(eventTypes);

  const handleSaveButtonClick = (event) => {
    event.preventDefault();

    const dataToSendToAPI = {
      eventName: rymanEvent.eventName,
      date: rymanEvent.date,
      time: rymanEvent.time,
      price: rymanEvent.price,
      eventTypeId: rymanEvent.eventType,
      imageURL: rymanEvent.imageURL,
    };

    return fetch(`http://localhost:8088/events`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataToSendToAPI),
    })
      .then((response) => response.json())
      .then(() => {
        navigate('/');
      });
  };
  return (
    <form className="eventsForm">
      <h2 className="eventsForm__title">Events</h2>
      <fieldset>
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

      <fieldset>
        <div className="form-group">
          <label htmlFor="type">Date:</label>
          <input
            type="date"
            required
            autoFocus
            className="form-control"
            value={rymanEvent.date}
            onChange={(event) => {
              const copy = { ...rymanEvent };
              copy.date = event.target.value;
              update(copy);
            }}
          />
        </div>
      </fieldset>

      <fieldset>
        <div className="form-group">
          <label htmlFor="time">Time:</label>
          <input
            type="time"
            required
            autoFocus
            //type="text"
            className="form-control"
            //placeholder="Time"
            value={rymanEvent.time}
            onChange={(event) => {
              const copy = { ...rymanEvent };
              copy.time = event.target.value;
              update(copy);
            }}
          />
        </div>
      </fieldset>

      <fieldset>
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

      <fieldset>
        <div className="form-group">
          <label htmlFor="type">Event Type:</label>
          <select
            autoFocus
            className="form-control"
            value={rymanEvent.eventType}
            onChange={(event) => {
              const copy = { ...rymanEvent };
              copy.eventType = parseInt(event.target.value);
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

      <fieldset>
        <div className="form-group">
          <label htmlFor="type">URL:</label>
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
        Submit Event
      </button>
    </form>
  );
};
