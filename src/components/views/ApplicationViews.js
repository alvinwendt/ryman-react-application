import { Route, Routes } from "react-router-dom";
import { EventDetails } from "../events/EventDetails";
import { EventList } from "../events/EventList";
import { EventsForm } from "../EventsForm";
import { CustomerViews } from "./CustomerViews";
import { EmployeeViews } from "./EmployeeViews";

// import { Route, Routes } from 'react-router-dom';
// import { EventList } from '../events/EventList';
// import { EventsForm } from '../EventsForm';

export const ApplicationViews = () => {
  const localRymanUser = localStorage.getItem("ryman_user");
  const rymanUserObject = JSON.parse(localRymanUser);

  if (rymanUserObject.staff) {
    // Return employee views
    return <EmployeeViews />;
  } else {
    //Return customer views
    return <CustomerViews />;
  }
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
      <Route path="events/create" element={<EventsForm />} />
      <Route path="events/:eventId" element={<EventDetails />} />
      <Route path="likedevents" element={<LikedItems />} />
      LikedItems
    </Routes>
  );
};

//   return (
//     <Routes>
//       <Route
//         path="/"
//         element={
//           <>
//             <EventList />
//           </>
//         }
//       >
//         <Route path="events/create" element={<EventsForm />} />
//       </Route>
//     </Routes>
//   );
