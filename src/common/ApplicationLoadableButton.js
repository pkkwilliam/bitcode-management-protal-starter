import { Button } from "antd";

export default function ApplicationLoadableButton(props) {
  const { children } = props;
  return <Button {...props}>{children}</Button>;
}
