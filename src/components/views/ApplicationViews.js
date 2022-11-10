import { Route, Routes } from "react-router-dom";
import { CommentsList } from "../comments/CommentsList";
import { EventList } from "../events/EventList";
import { EventsForm } from "../EventsForm";

export const ApplicationViews = () => {

  return (
    <Routes>
      <Route path="/" element={
        <>
          <EventList />
        </>
      }>
        <Route path="events/create" element={<EventsForm />} />
        <Route path="events/:eventId" element={<CommentsList />} />
      </Route>
    </Routes>
  )
};
