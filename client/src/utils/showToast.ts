import { toast } from "vue3-toastify";

type ToastType = "success" | "info" | "warning" | "error";

export const showToast = (type: ToastType, message: string) => {
  return toast(message, {
    type,
  });
};
