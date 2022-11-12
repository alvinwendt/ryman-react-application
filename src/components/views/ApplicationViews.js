import { Route, Routes } from "react-router-dom";
import { EventDetails } from "../events/EventDetails";
import { EventList } from "../events/EventList";
import { EventsForm } from "../EventsForm";

export const ApplicationViews = () => {

  return (
    <Routes>
      <Route path="/" element={
        <>
          <EventList />
        </>
      }></Route>
        <Route path="events/create" element={<EventsForm />} />
        <Route path="events/:eventId" element={<EventDetails />} />
      
    </Routes>
  )
};
