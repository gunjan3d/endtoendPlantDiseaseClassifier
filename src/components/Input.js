import React, { useState } from "react";
import axios from "axios";
export default function Input() {
  const [file, setFile] = useState(null);
  let [answer, setAnswer] = useState("");
  let selectedFile = null;
  const handleFile = (event) => {
    selectedFile = event.target.files[0];
    setFile(selectedFile);
    console.log(selectedFile);
  };

  const handlePredict = () => {
    console.log(file);
    let fd = new FormData();
    fd.append("file", file);
    axios.post("http://localhost:8000/predict", fd, {
        onUploadProgress: (ProgressEvent) => {
          console.log(ProgressEvent.progress * 100);
        },
      })
      .then((res) => setAnswer(res.data))
      .catch((err) => console.log(err));
      console.log("answer", answer.class,answer.confidence);
  };

  return (
    <>
      <div className="flex flex-col items-center  m-10">
        <label className="block">
          <span className="sr-only">Choose profile photo</span>
          <input
            type="file"
            className="block w-full text-sm text-gray-500
      file:me-4 file:py-2 file:px-4
      file:rounded-lg file:border-0
      file:text-sm file:font-semibold
      file:bg-blue-600 file:text-white
      hover:file:bg-blue-700
      file:disabled:opacity-50 file:disabled:pointer-events-none
      dark:file:bg-blue-500
      dark:hover:file:bg-blue-400
    "
            onChange={handleFile}
          />
        </label>
        <p className=" my-5">
          Upload your plant image.please upload only the plants leaf
        </p>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
          onClick={handlePredict}
        >
          Predict
        </button>
        {answer && (
          <div>
            <p>Class: {answer.class}</p>
            <p>Confidence: {answer.confidence*100}</p>
          </div>
        )}
      </div>
    </>
  );
}
