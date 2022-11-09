import { CommentsForm } from "../comments/CommentsForm";

import { Route, Routes } from "react-router-dom";
import { EventList } from "../events/EventList";

export const ApplicationViews = () => {
  const localRymanUser = localStorage.getItem("ryman_user");
  const rymanUserObject = JSON.parse(localRymanUser);

  return (
    <Routes>
      <Route path="/" element={
        <>
          <EventList />
        </>
      }>
      <Route path="events/create" element={<EventsForm />} />
      </Route>
    </Routes>
  )
  if (rymanUserObject.staff) {
    return < CommentsForm />
  } else {
    return "<h1>Patron Views</h1>";
  }
};
