import { Route, Routes } from "react-router-dom";
import { EventList } from "../events/EventList";
import { EventDetails } from "../events/EventDetails";
import { LikedItems } from "../../components/LikedItems";

export const CustomerViews = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <EventList />
          </>
        }
      ></Route>
      <Route path="events/liked" element={<LikedItems />} />
      <Route path="events/:eventId" element={<EventDetails />} />
    </Routes>
  );
};
