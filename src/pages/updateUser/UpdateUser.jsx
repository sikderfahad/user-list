import axios from "axios";
import { useForm } from "react-hook-form";
import { useLoaderData, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import showToast from "../../hooks/showToast";
import Swal from "sweetalert2";

const UpdateUser = () => {
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const { data: user } = useLoaderData();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Please check your updated info!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, update it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await axiosSecure.put(
            `/api/users/${user?.data?.id}`,
            data
          );
          if (res?.data?.updatedAt) {
            showToast("User info updated!");
            navigate("/");
          }
        } catch (error) {
          console.error(error);
        }
      }
    });
  };

  return (
    <div className="w-11/12 mx-auto h-screen flex items-center justify-center">
      <div className="w-full md:w-2/3 lg:w-1/2 flex items-center justify-center mx-auto border rounded-lg p-5 md:p-10">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-6 w-full md:w-2/3 lg:w-1/2"
        >
          <h1 className="lg:text-4xl md:text-2xl text-xl text-center capitalize mb-5">
            Update User
          </h1>
          <div className="">
            <label className="floating-label">
              <span>First name</span>
              <input
                {...register("first_name", {
                  required: "First name is required",
                })}
                defaultValue={user?.data?.first_name}
                type="text"
                placeholder="First name"
                className="input input-lg text-base w-full"
              />
            </label>
            {errors.first_name && (
              <p className="text-red-500 text-sm mt-2">
                {errors.first_name.message}
              </p>
            )}
          </div>

          <div className="">
            <label className="floating-label">
              <span>Last name</span>
              <input
                {...register("last_name", {
                  required: "Last name is required",
                })}
                defaultValue={user?.data?.last_name}
                type="text"
                placeholder="Last name"
                className="input input-lg text-base w-full"
              />
            </label>
            {errors.last_name && (
              <p className="text-red-500 text-sm mt-2">
                {errors.last_name.message}
              </p>
            )}
          </div>
          <div className="">
            <label className="floating-label">
              <span>Your Email</span>
              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "Invalid email formate",
                  },
                })}
                defaultValue={user?.data?.email}
                type="text"
                placeholder="mail@site.com"
                className="input input-lg text-base w-full"
              />
            </label>
            {errors.email && (
              <p className="text-red-500 text-sm mt-2">
                {errors.email.message}
              </p>
            )}
          </div>
          <button type="submit" className="btn btn-primary w-full">
            Update user
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateUser;
