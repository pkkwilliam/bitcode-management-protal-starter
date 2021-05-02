import React, { useState } from "react";
import { CCard, CCardBody, CCardHeader } from "@coreui/react";
import CIcon from "@coreui/icons-react";

export default function IconGenerator(props) {
  const [backgroundColor, setbackgroundColor] = useState({
    gradientFirst: "#000000",
    gradientSecond: "#FFFFFF",
  });
  const [iconColor, setIconColor] = useState("#000000");
  const [iconName, setIconName] = useState("");
  const [iconSize, setIconSize] = useState(12);
  return (
    <CCard>
      <CCardHeader>圖標生成</CCardHeader>
      <CCardBody>
        <div>
          <CIcon name="cil-settings" alt="Settings" />
        </div>
      </CCardBody>
    </CCard>
  );
}
