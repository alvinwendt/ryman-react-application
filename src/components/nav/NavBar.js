import { EmployeeNav } from "./EmployeeNav";
import { CustomerNav } from "./CustomerNav";

export const NavBar = () => {
    const rymanUser = localStorage.getItem("ryman_user")
    const rymanUserObject = JSON.parse(rymanUser)

    if (rymanUserObject.isStaff) {
        return <EmployeeNav />
    }
    else {
        return <CustomerNav />
    }
}