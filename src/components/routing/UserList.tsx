import { Link } from "react-router-dom";

const UserList = () => {
    const users = [
        { id: 1, name: "Ali" },
        { id: 2, name: "Naghi" },
        { id: 3, name: "Taghi" },
        { id: 4, name: "Ja ..." }
    ];
    return (
        <ul className="list-group">
            {users.map((user) => (
                <li className="list-group-item" key={user.id}>
                    <Link to={`/users/${user.id}`}>{user.name}</Link>
                </li>
            ))}
        </ul>
    );
};

export default UserList;
