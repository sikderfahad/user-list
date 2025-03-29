import { Slide, toast } from "react-toastify";

const showToast = (msg, type = "success") => {
  const style = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    transition: Slide,
  };

  if (type === "success") {
    return toast.success(msg, style);
  }

  if (type === "warning") {
    return toast.warn(msg, style);
  }

  if (type === "error") {
    return toast.error(msg, style);
  }

  if (type === "info") {
    return toast.info(msg, style);
  }
};

export default showToast;
