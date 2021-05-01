import React from "react";
import { Image } from "antd";
import ApplicationImageUploader from "./ApplicationImageUploader";
import { CloseCircleTwoTone } from "@ant-design/icons";

export default function ApplicationEditableImageList(props) {
  const { imageUrls, onAddImage, onRemoveImage } = props;
  const EditableIamges = imageUrls.map((imageUrl, index) => (
    <EditableImage index={index} onRemoveImage={onRemoveImage} url={imageUrl} />
  ));
  return (
    <>
      <div
        style={{
          alignItems: "center",
          display: "flex",
          flexDirection: "row",
          overflowY: "scroll",
          paddingBottom: 10,
          paddingTop: 10,
        }}
      >
        {EditableIamges}
      </div>
      <ApplicationImageUploader onAddImage={onAddImage} {...props} />
    </>
  );
}

export function EditableImage(props) {
  const { index, onRemoveImage, url } = props;
  return (
    <div
      style={{ marginRight: 15, position: "relative", width: "fit-content" }}
    >
      <CloseCircleTwoTone
        onClick={() => onRemoveImage(index)}
        style={{
          color: "#5F5F5F",
          fontSize: 22,
          position: "absolute",
          right: -10,
          top: -10,
          zIndex: 10,
        }}
      />
      <Image src={url} style={{ width: 250, maxHeight: 250 }} />
    </div>
  );
}
