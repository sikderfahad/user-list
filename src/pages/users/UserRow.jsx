import React from "react";
import { useNavigate } from "react-router-dom";

const UserRow = ({ user, handleUserDelete }) => {
  //   console.log(user);
  const navigate = useNavigate();

  return (
    <tr>
      <th>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-24 w-24">
              <img src={user?.avatar} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
        </div>
      </td>
      <td>
        <h1>{`${user?.first_name} ${user?.last_name}`} </h1>
      </td>
      <td>{user?.email}</td>
      <th>
        <div className="w-full flex flex-col gap-5">
          <button
            onClick={() => navigate(`/update-user/${user?.id}`)}
            className="btn btn-primary"
          >
            Edite
          </button>
          <button
            onClick={() => handleUserDelete(user?.id)}
            className="btn btn-danger bg-red-700"
          >
            Delete
          </button>
        </div>
      </th>
    </tr>
  );
};

export default UserRow;
