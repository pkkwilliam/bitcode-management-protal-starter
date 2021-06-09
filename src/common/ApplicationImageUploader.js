import Dropzone from "react-dropzone-uploader";

import "react-dropzone-uploader/dist/styles.css";
import ApplicationComponent from "./ApplicationComponent";

const FREE_IMAGE_SERVICE_PREPEND_URL = "https://user-assets.sxlcdn.com/";
export default class ApplicationImageUploader extends ApplicationComponent {
  render() {
    const { onAddImage } = this.props;
    const { qiniuToken } = this.appState.appContent.content;
    return (
      <Dropzone
        getUploadParams={(file, meta) =>
          getUploadParams(file, meta, qiniuToken)
        }
        onChangeStatus={handleChangeStatus}
        onSubmit={(files, allFiles) =>
          handleSubmit(files, allFiles, onAddImage)
        }
        submitButtonContent="提交圖片"
        accept="image/*"
        {...this.props}
      />
    );
  }
}
// specify upload params and url for your files
function getUploadParams(file, meta, token) {
  return {
    methid: "POST",
    url: "https://upload.qiniup.com/",
    fields: {
      token,
    },
  };
}

// called every time a file's `status` changes
function handleChangeStatus({ meta, file, xhr }, status) {}

// receives array of files that are done uploading when submit button is clicked
function handleSubmit(files, allFiles, onAddImage) {
  const imageUrls = [];
  allFiles.forEach((file, index) => {
    const { xhr } = file;
    let response = JSON.parse(xhr.response);
    const url = FREE_IMAGE_SERVICE_PREPEND_URL + response.storageKey;
    imageUrls.push(url);
  });
  onAddImage(imageUrls);
}
