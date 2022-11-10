import { Route, Routes } from "react-router-dom";
import { EventList } from "../events/EventList";
import { EventDetails } from "../events/EventDetail";

export const ApplicationViews = () => {
  const localRymanUser = localStorage.getItem("ryman_user");
  const rymanUserObject = JSON.parse(localRymanUser);

  return (
    <Routes>
      <Route path="/" element={
        <>
          <EventList />
        </>
      }></Route>
      <Route path="/events/:eventId" element={<EventDetails />} />
    </Routes>
  )
};
