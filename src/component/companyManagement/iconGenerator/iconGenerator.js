import React, { useState } from "react";
import {
  CCard,
  CCardBody,
  CFormGroup,
  CCardHeader,
  CInput,
  CLabel,
  CCol,
  CRow,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { brandSet } from "@coreui/icons";

export default function IconGenerator(props) {
  const [backgroundColor, setbackgroundColor] = useState({
    gradientFirst: "#000000",
    gradientSecond: "#FFFFFF",
  });
  const [iconLabel, setIconLabel] = useState("圖標名字");
  const [iconColor, setIconColor] = useState("#000000");
  const [iconName, setIconName] = useState("cil-speech");
  Object.entries(brandSet).map(([name, value]) => console.log(name));
  return (
    <CCard>
      <CCardHeader>圖標生成</CCardHeader>
      <CCardBody>
        <CFormGroup>
          <CLabel htmlFor="nf-password">Icon Name</CLabel>
          <CInput
            onChange={(event) => setIconName(event.target.value)}
            placeholder="please enter icon name cil-..."
            value={iconName}
          />
        </CFormGroup>
        <CFormGroup>
          <CRow>
            <CCol>
              <CLabel htmlFor="nf-password">
                Background Color Gradient First
              </CLabel>
              <CInput
                onChange={(event) =>
                  setbackgroundColor({
                    ...backgroundColor,
                    gradientFirst: event.target.value,
                  })
                }
                placeholder="please enter background gradient seocond color (Hex Code: ##33ccff)"
                value={backgroundColor.gradientFirst}
              />
            </CCol>
            <CCol>
              <CLabel htmlFor="nf-password">
                Background Color Gradient Second
              </CLabel>
              <CInput
                onChange={(event) =>
                  setbackgroundColor({
                    ...backgroundColor,
                    gradientSecond: event.target.value,
                  })
                }
                placeholder="please enter background gradient seocond color (Hex Code: ##33ccff)"
                value={backgroundColor.gradientSecond}
              />
            </CCol>
          </CRow>
        </CFormGroup>
        <CFormGroup>
          <CRow>
            <CCol>
              <CLabel htmlFor="nf-password">Icon Color</CLabel>
              <CInput
                onChange={(event) => setIconColor(event.target.value)}
                placeholder="please enter icon color (Hex Code: ##33ccff)"
                value={iconColor}
              />
            </CCol>
            <CCol>
              <CLabel htmlFor="nf-password">Icon Label</CLabel>
              <CInput
                onChange={(event) => setIconLabel(event.target.value)}
                placeholder="please enter icon label"
                value={iconLabel}
              />
            </CCol>
          </CRow>
        </CFormGroup>
        <CRow>
          <CCol>
            <div
              style={{
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  background: `linear-gradient(to top right, ${backgroundColor.gradientFirst} 0%, ${backgroundColor.gradientSecond} 100%)`,
                  borderRadius: 100,
                  color: iconColor,
                  padding: 30,
                  width: "min-content",
                }}
              >
                <CIcon name={iconName} size="6xl" />
              </div>
              <p style={{ fontSize: 28, fontWeight: 300, marginTop: 15 }}>
                {iconLabel}
              </p>
            </div>
          </CCol>
        </CRow>
      </CCardBody>
    </CCard>
  );
}
