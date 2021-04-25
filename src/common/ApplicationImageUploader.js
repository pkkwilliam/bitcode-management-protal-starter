import Dropzone from "react-dropzone-uploader";

import "react-dropzone-uploader/dist/styles.css";

export default function ApplicationImageUploader(props) {
  // specify upload params and url for your files
  const getUploadParams = ({ file, meta }) => {
    console.log(file);
    var formData = new FormData();
    formData.append("file", file);

    fetch("http://205.215.9.93:9000/BitCode-RMMS/test4.png", {
      method: "PUT",
      body: formData,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      mode: "cors",
    });
    // return {
    //   method: "PUT",
    //   url: "https://192.168.31.106:8080/BitCode-RMMS/test4.png",
    // };
  };

  // called every time a file's `status` changes
  const handleChangeStatus = ({ meta, file }, status) => {
    console.log(status, meta, file);
  };

  // receives array of files that are done uploading when submit button is clicked
  const handleSubmit = (files, allFiles) => {
    console.log(files.map((f) => f.meta));
    // var xhr = new XMLHttpRequest();
    // xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
    // xhr.open(
    //   "PUT",
    //   "http://192.168.31.106:8080/BitCode-RMMS/ates/test4.png",
    //   true
    // );
    // // xhr.onload = function(e) { ... };

    // // // Listen to the upload progress.
    // // xhr.upload.onprogress = function(e) { ... };

    // xhr.send(files[0]);
    allFiles.forEach((f) => f.remove());
  };

  return (
    <Dropzone
      getUploadParams={getUploadParams}
      onChangeStatus={handleChangeStatus}
      onSubmit={handleSubmit}
      accept="image/*"
      {...props}
    />
  );
}
