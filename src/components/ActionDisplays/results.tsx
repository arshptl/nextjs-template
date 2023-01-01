import { Button, Result } from "antd";

export const WarningResult = (props: any) => {
  return (
    <Result
      status="warning"
      title={props.desc}
    />
  );
};

export const serverError = () => { 
    return (
        <Result
    status="500"
    title="500"
    subTitle="Sorry, something went wrong."
    extra={<Button type="primary">Back Home</Button>}
        />
    )
}

export const notFound = () => { 
    return (
          <Result
    status="404"
    title="404"
    subTitle="Sorry, the page you visited does not exist."
    extra={<Button type="primary">Back Home</Button>}
  />
    )
}

export const unauthorized = () => { 
    return (
          <Result
    status="403"
    title="403"
    subTitle="Sorry, you are not authorized to access this page."
    extra={<Button type="primary">Back Home</Button>}
  />
    )
}
