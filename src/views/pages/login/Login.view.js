import React, { useState } from "react";
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import ApplicationComponentView from "src/common/ApplicationComponentView";

export default function LoginView(props) {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const { onClickLogin } = props;
  return (
    <ApplicationComponentView {...props}>
      <div className="c-app c-default-layout flex-row align-items-center">
        <CContainer>
          <CRow className="justify-content-center">
            <CCol md="8">
              <CCardGroup>
                <CCard className="p-4">
                  <CCardBody>
                    <CForm>
                      <h3>RMMS系統登入</h3>
                      <p className="text-muted">登錄到您的源代碼RMMS帳戶</p>
                      <CInputGroup className="mb-3">
                        <CInputGroupPrepend>
                          <CInputGroupText>
                            <CIcon name="cil-user" />
                          </CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput
                          onChange={(event) => setUsername(event.target.value)}
                          type="text"
                          placeholder="用戶名"
                          autoComplete="username"
                        />
                      </CInputGroup>
                      <CInputGroup className="mb-4">
                        <CInputGroupPrepend>
                          <CInputGroupText>
                            <CIcon name="cil-lock-locked" />
                          </CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput
                          onChange={(event) => setPassword(event.target.value)}
                          type="password"
                          placeholder="密碼"
                          autoComplete="current-password"
                        />
                      </CInputGroup>
                      <CRow>
                        <CCol xs="6">
                          <CButton
                            color="primary"
                            className="px-4"
                            onClick={() => onClickLogin(username, password)}
                          >
                            登入
                          </CButton>
                        </CCol>
                        <CCol xs="6" className="text-right">
                          <p className="text-muted">
                            忘記密碼 - 請向您的公司管理員申請密碼重置
                          </p>
                        </CCol>
                      </CRow>
                      <CRow>
                        <CCol className="text-right">
                          <CButton color="link" className="px-0">
                            BitCode Technology | 源代碼科技
                          </CButton>
                        </CCol>
                      </CRow>
                    </CForm>
                  </CCardBody>
                </CCard>
              </CCardGroup>
            </CCol>
          </CRow>
        </CContainer>
      </div>
    </ApplicationComponentView>
  );
}
