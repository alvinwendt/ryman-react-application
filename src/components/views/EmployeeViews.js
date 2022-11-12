import { Outlet, Route, Routes } from 'react-router-dom';
// import { Customer } from '../Customers/Customer';
// import { CustomerDetails } from '../Customers/CustomerDetails';
// import { CustomerList } from '../Customers/CustomerList';
// import { EmployeeDetails } from '../employees/EmployeeDetails';
// import { EmployeeList } from '../employees/EmployeeList';
// import { TicketContainer } from '../tickets/TicketContainer';

export const EmployeeViews = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <div> </div>
            <Outlet />
          </>
        }
      ></Route>
    </Routes>
  );
};
