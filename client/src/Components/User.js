import user from "../Images/user.png";
import { useSelector } from "react-redux";

const User = () => {
  const email = useSelector((state) => state.users.user.email);
  const name = useSelector((state) => state.users.user.name);

  return (
    <div>
      <img src={user} className="userImage" />
      <h3>{name}</h3>
      <h5>{email}</h5>
    </div>
  );
};

export default User;
