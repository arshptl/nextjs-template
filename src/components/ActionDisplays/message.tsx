import { message } from "antd";

export const Success = (desc: any) => {
  message.success(desc);
};

export const Error = (desc: any) => {
  message.error(desc);
};

export const Warning = (desc: any) => {
  message.warning(desc);
};
