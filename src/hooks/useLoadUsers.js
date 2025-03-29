import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useState } from "react";

const useLoadUsers = () => {
  const axiosSecure = useAxiosSecure();
  const [page, setPage] = useState(1);
  const [userCount, setUserCount] = useState(true);

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/api/users?page=${page}`);
      setUserCount(res?.data?.data.length);
      return res?.data?.data || [];
    },
    enabled: !!userCount,
  });

  console.log(userCount);

  return { data, isLoading, refetch };
};

export default useLoadUsers;
