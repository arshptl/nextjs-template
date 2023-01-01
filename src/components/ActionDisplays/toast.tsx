import { notification } from "antd";

interface toastProps {
  message: string;
  desc: string;
}

export const toastSuccess = (props: toastProps) => {
  notification.success({
    message: props.message,
    description: props.desc ? props.desc : "",
  });
};

export const toastError = (props: toastProps) => {
  notification.error({
    message: props.message,
    description: props.desc ? props.desc : "",
  });
};

export const toastInfo = (props: toastProps) => {
  notification.info({
    message: props.message,
    description: props.desc ? props.desc : "",
  });
};
