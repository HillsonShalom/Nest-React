import { useState } from 'react';
import './Center.css'
import UsersList from "./Center/UsersList";
import { User } from '../models/userModel';

export default function Center() {
    const [users, setUsers] = useState<User[]>([])
  return (
    <div className="center">
        <UsersList users={users} setUsers={setUsers}/>
    </div>
  )
}
