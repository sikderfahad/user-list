import { useForm } from "react-hook-form";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import showToast from "../../hooks/showToast";
import { setTokenLS } from "../../hooks/setToken";

const Login = () => {
  const axiosSecure = useAxiosSecure();
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await axiosSecure.post("/api/login", data);
      const token = res?.data?.token;

      if (!token) {
        return showToast("Authentication failed!", "error");
      }

      setTokenLS(token);

      navigate("/", { replace: true });
      showToast("Welcome back!");
    } catch (error) {
      console.error(error);

      // Handle potential errors
      const netError = error?.message.includes("Network Error");
      const userNotFound =
        error?.response?.data?.error.includes("user not found");

      netError && showToast("No internet!", "error");
      userNotFound && showToast("User not found!", "error");
    }
  };

  return (
    <div className="w-11/12 mx-auto h-screen flex items-center justify-center">
      <div className="w-full md:w-2/3 lg:w-1/2 flex items-center justify-center mx-auto border rounded-lg p-5 md:p-10">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-6 w-full md:w-2/3 lg:w-1/2"
        >
          <h1 className="lg:text-4xl md:text-2xl text-xl text-center mb-5">
            Login
          </h1>
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
          <div className="relative">
            <label className="floating-label">
              <span>Your Password</span>
              <input
                {...register("password", { required: "Password is required" })}
                type={showPass ? "text" : "password"}
                placeholder="******"
                className="input input-lg text-base w-full"
              />
            </label>
            <span
              onClick={() => setShowPass(!showPass)}
              style={{ height: "calc(100% - 10px)" }}
              className="text-xl absolute top-[5px] right-[1px] flex items-center px-4 bg-[#1d232a] cursor-pointer"
            >
              {!showPass ? (
                <FaEye className="text-green-500" />
              ) : (
                <FaEyeSlash className="text-blue-500" />
              )}
            </span>
            {errors.password && (
              <p className="text-red-500 text-sm mt-2">
                {errors.password.message}
              </p>
            )}
          </div>
          <button type="submit" className="btn btn-primary w-full">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
