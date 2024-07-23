import {
  CButton,
  COffcanvas,
  COffcanvasHeader,
  COffcanvasTitle,
  CCloseButton,
  COffcanvasBody,
} from "@coreui/react";
import React, { useState } from "react";

const CanvasWebDev = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <div className="w-full h-full">
        <CButton color="primary" onClick={() => setVisible(true)}>
          Toggle bottom offcanvas
        </CButton>
        <COffcanvas
          placement="bottom"
          visible={visible}
          onHide={() => setVisible(false)}
        >
          <COffcanvasHeader>
            <COffcanvasTitle>Offcanvas</COffcanvasTitle>
            <CCloseButton
              className="text-reset"
              onClick={() => setVisible(false)}
            />
          </COffcanvasHeader>
          <COffcanvasBody>
            Content for the offcanvas goes here. You can place just about any
            React component or custom elements here.
          </COffcanvasBody>
        </COffcanvas>
      </div>
    </>
  );
};

export default CanvasWebDev;
