import { Route, Routes } from "react-router-dom";
import { Events } from "../events/Events";

export const ApplicationViews = () => {
  const localRymanUser = localStorage.getItem("ryman_user");
  const rymanUserObject = JSON.parse(localRymanUser);

  return (
    <Routes>
      <Route path="/" element={
        <>
          <Events />
        </>
      }></Route>
    </Routes>
  )
};
