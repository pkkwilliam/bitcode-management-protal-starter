import Dropzone from "react-dropzone-uploader";

import "react-dropzone-uploader/dist/styles.css";
import { GET_IMAGE_UPLOAD_TOKEN } from "src/service/service";
import ApplicationComponent from "./ApplicationComponent";

export default class ApplicationImageUploader extends ApplicationComponent {
  render() {
    const { onAddImage } = this.props;
    const { qiniuToken } = this.appState.appContent.content;
    return (
      <Dropzone
        getUploadParams={(file, meta) =>
          getUploadParams(file, meta, this.serviceExecutor)
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
async function getUploadParams(file, meta, serviceExecutor) {
  const { token, uploadUrl } = await serviceExecutor.execute(
    GET_IMAGE_UPLOAD_TOKEN()
  );
  return {
    methid: "POST",
    url: uploadUrl,
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
    const { accessUrl, key } = response;
    const url = accessUrl + "/" + key;
    imageUrls.push(url);
  });
  onAddImage(imageUrls);
}
