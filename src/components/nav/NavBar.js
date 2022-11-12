import { EmployeeNav } from "./EmployeeNav";
import { CustomerNav } from "./CustomerNav";

export const NavBar = () => {
    const rymanUser = localStorage.getItem("ryman_user")
    const rymanUserObject = JSON.parse(rymanUser)

    if (rymanUserObject.staff) {
        return <EmployeeNav />
    }
    else {
        return <CustomerNav />
    }
}