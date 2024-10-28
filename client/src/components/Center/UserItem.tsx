import moment from "moment";
import { User } from "../../models/userModel"
import UserActions from "./UserActions";

interface Props {
    user: User;
}

export default function UserItem({user}: Props) {
  return (
    <div className="user-item">
        <h3>{user.username}</h3>
        <p>{user.email}</p>
        <p>
            {moment(user.dateOfBirth).format('MMMM Do YYYY, h:mm:ss a')}
        </p>
        <p>{user.address.city}</p>
        <UserActions/>
    </div>
  )
}
