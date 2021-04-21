import React from "react";
import { Button } from "antd";

export default function ApplicationTextButton(props) {
  const { children } = props;
  return (
    <Button type="link" {...props}>
      {children}
    </Button>
  );
}
