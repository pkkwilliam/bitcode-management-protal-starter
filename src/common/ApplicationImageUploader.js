import Dropzone from "react-dropzone-uploader";

import "react-dropzone-uploader/dist/styles.css";

const FREE_IMAGE_SERVICE_PREPEND_URL = "https://user-assets.sxlcdn.com/";
const QINIU_FREE_TOKEN =
  "SZhu7w4E_JjQHNBeI_p6RLd9OmEJjcJ1_0mkMO5o:E9dOEo7RJ8xKr81I6OAN9RoDi60=:eyJzY29wZSI6InN4bC11c2VyIiwic2F2ZUtleSI6ImltYWdlcy84MTEzOTMvJChldGFnKSQoZXh0KSIsImVuZFVzZXIiOiI4MTEzOTMiLCJyZXR1cm5Cb2R5Ijoie1wic3RvcmFnZUtleVwiOiQoa2V5KSxcImhhc2hcIjokKGV0YWcpLFwid2lkdGhcIjokKGltYWdlSW5mby53aWR0aCksXCJoZWlnaHRcIjokKGltYWdlSW5mby5oZWlnaHQpLFwic2l6ZVwiOiQoZnNpemUpLFwiaW1hZ2VJbmZvXCI6JChpbWFnZUluZm8pLFwibWltZVR5cGVcIjokKG1pbWVUeXBlKSxcImZvcm1hdFwiOiQoaW1hZ2VJbmZvLmZvcm1hdCksXCJzdG9yYWdlXCI6XCJxblwifSIsImRlYWRsaW5lIjoxNjE5OTQwMDcxLCJmc2l6ZUxpbWl0IjoxMDQ4NTc2MCwibWltZUxpbWl0IjoiaW1hZ2UvKiJ9";

export default function ApplicationImageUploader(props) {
  const { onAddImage } = props;

  // specify upload params and url for your files
  const getUploadParams = ({ file, meta }) => {
    return {
      methid: "POST",
      url: "https://upload.qiniup.com/",
      fields: {
        token: QINIU_FREE_TOKEN,
      },
    };
  };

  // called every time a file's `status` changes
  const handleChangeStatus = ({ meta, file, xhr }, status) => {};

  // receives array of files that are done uploading when submit button is clicked
  const handleSubmit = (files, allFiles) => {
    const imageUrls = [];
    allFiles.forEach((file, index) => {
      const { xhr } = file;
      let response = JSON.parse(xhr.response);
      const url = FREE_IMAGE_SERVICE_PREPEND_URL + response.storageKey;
      imageUrls.push(url);
    });
    onAddImage(imageUrls);
  };

  return (
    <Dropzone
      getUploadParams={getUploadParams}
      onChangeStatus={handleChangeStatus}
      onSubmit={handleSubmit}
      submitButtonContent="提交圖片"
      accept="image/*"
      {...props}
    />
  );
}
