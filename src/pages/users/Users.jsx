import React, { useEffect, useState } from "react";
import UserRow from "./UserRow";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import SpinnerCircle from "../../components/spinnerCircle/SpinnerCircle";
import { Helmet } from "react-helmet-async";

const Users = () => {
  const axiosSecure = useAxiosSecure();
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState([]);

  // Load users
  useEffect(() => {
    const loadUsers = async () => {
      if (!hasMore || loading) return;

      setLoading(true);
      try {
        const res = await axiosSecure.get(`/api/users?page=${page}`);
        const newUsers = res?.data?.data;
        if (newUsers.length === 0) {
          setHasMore(false);
          return;
        }
        setUsers((prevUsers) => [...prevUsers, ...newUsers]);
      } catch (error) {
        console.error("Error while fetching users: ", error);
      } finally {
        setLoading(false);
      }
    };

    loadUsers();
  }, [axiosSecure, page]);

  // Filter users based on user name and email
  useEffect(() => {
    const lowerCaseQuery = searchQuery.toLowerCase();
    setFilteredUsers(
      users &&
        users.filter(
          (user) =>
            (user?.name && user?.name.toLowerCase().includes(lowerCaseQuery)) ||
            (user?.email && user?.email.toLowerCase().includes(lowerCaseQuery))
        )
    );
  }, [searchQuery, users]);

  // Handle user delete
  const handleUserDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/api/users/${id}`);
        if (res?.status === 204) {
          setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
        }
        Swal.fire({
          title: "Deleted!",
          text: "The user has been deleted.",
          icon: "success",
        });
      }
    });
  };

  // Infinite scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
          document.documentElement.offsetHeight - 100 &&
        !loading &&
        hasMore
      ) {
        setPage((prevPage) => prevPage + 1);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading, hasMore]);

  return (
    <div>
      <Helmet>
        <title>My users | Home</title>
      </Helmet>

      <h1 className="text-4xl font-semibold text-center my-10">
        All users <sup className="text-green-600">({users.length})</sup>
      </h1>
      {/* Search Input */}
      <div className="flex justify-center my-4">
        <input
          type="text"
          placeholder="Search by name or email..."
          className="input input-bordered w-96"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* Table Head */}
          <thead>
            <tr>
              <th className="text-sm"></th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Email</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <UserRow
                user={user}
                key={user?.id}
                handleUserDelete={handleUserDelete}
              />
            ))}
          </tbody>
        </table>
      </div>
      {/* Loading Spinner at the bottom */}
      {loading && (
        <div className="flex justify-center my-5">
          <SpinnerCircle />
        </div>
      )}
    </div>
  );
};

export default Users;
