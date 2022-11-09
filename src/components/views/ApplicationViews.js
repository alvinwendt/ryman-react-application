import { Outlet, Route, Routes } from 'react-router-dom';
import { EventsForm } from '../EventsForm';

export const ApplicationViews = () => {
  const localProjectUser = localStorage.getItem('project_user');
  const projectUserObject = JSON.parse(localProjectUser);

  //   if (projectUserObject.staff) {
  //     return "<h1>Staff Views</h1>";
  //   } else {
  //     return "<h1>Patron Views</h1>";
  //   }
  // };
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
        {/* <Route path="products" element={<EventsContainer />} /> */}

        <Route path="events/create" element={<EventsForm />} />
      </Route>
    </Routes>
  );
};
