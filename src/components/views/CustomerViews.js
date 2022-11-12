import { Outlet, Route, Routes } from 'react-router-dom';
import { Event } from '../events/Event';
//import { EventList } from '../events/EventsList';
// import { Comments } from '../serviceTickets/TicketForm';
import { EventsForm } from '../EventsForm';

export const CustomerViews = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <h1>Ryman</h1>
            <Outlet />
          </>
        }
      >
        {/* <Route path="events" element={<EventList />} /> */}
        <Route path="events/create" element={<EventsForm />} />
      </Route>
    </Routes>
  );
};
