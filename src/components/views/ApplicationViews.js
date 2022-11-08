export const ApplicationViews = () => {
  const localRymanUser = localStorage.getItem("ryman_user");
  const rymanUserObject = JSON.parse(localRymanUser);

  if (rymanUserObject.staff) {
    return "<h1>Staff Views</h1>";
  } else {
    return "<h1>Patron Views</h1>";
  }
};
