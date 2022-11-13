import { Route, Routes } from 'react-router-dom';
import { EventList } from '../events/EventList';
import { EventDetails } from '../events/EventDetails';

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
      <Route path="events/:eventId" element={<EventDetails />} />
    </Routes>
  );
};
