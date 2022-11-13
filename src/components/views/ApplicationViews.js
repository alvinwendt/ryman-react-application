import { CustomerViews } from "./CustomerViews";
import { EmployeeViews } from "./EmployeeViews";

export const ApplicationViews = () => {

  const localRymanUser = localStorage.getItem("ryman_user");
  const rymanUserObject = JSON.parse(localRymanUser);

  if (rymanUserObject.staff) {
    return <EmployeeViews />;
  } else {
    return <CustomerViews />;
  }
}
