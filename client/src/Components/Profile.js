import { useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Profile = () => {
  const email = useSelector((state) => state.users.user.email);
  const name = useSelector((state) => state.users.user.name);

  const navigate = useNavigate();

  useEffect(() => {
    if (!email) {
      navigate("/login");
    }
  }, [email]);

  return (
    <div>
      <h1>Profile</h1>
      <h3>{name}</h3>
      <h5>{email}</h5>
    </div>
  );
};

export default Profile;
