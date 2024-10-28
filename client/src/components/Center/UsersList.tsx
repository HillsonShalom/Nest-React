import { User } from "../../models/userModel"
import UserItem from "./UserItem";
const url = "http://localhost:3456/user"

interface Props {
    users: User[];
    setUsers: (x: User[]) => void
}

export default function UsersList({users, setUsers}: Props) {
    fetchUsers().then(data => setUsers(data));
  return (
    <div className="users-list">
        {users.map(u => <UserItem user={u}/>)}
    </div>
  )
}

const fetchUsers = async (): Promise<User[]> => {
    const data = (await fetch(url).then(d => d.json())) as User[]
    return data
}
