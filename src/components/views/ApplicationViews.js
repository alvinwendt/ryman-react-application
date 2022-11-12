import { Route, Routes } from "react-router-dom";
import { EventList } from "../events/EventList";
import { EventsForm } from "../../components/EventsForm";
import { LikedItems } from "../LikedItems";

export const ApplicationViews = () => {
  // const localRymanUser = localStorage.getItem("ryman_user");
  // const rymanUserObject = JSON.parse(localRymanUser);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            {" "}
            <EventList />{" "}
          </>
        }
      ></Route>
      <Route path="events/create" element={<EventsForm />} />
      <Route path="likedevents" element={<LikedItems />} />
      LikedItems
    </Routes>
  );
};
