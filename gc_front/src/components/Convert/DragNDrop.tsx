import React, { useState, useCallback } from "react";
import { Upload, File, FileText, Image, Video, Music } from "lucide-react";
import styles from "./Convert.module.css";

export default function DragNDrop() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [convertOptions, setConvertOptions] = useState([]);
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  }, []);
  const handleDrop = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const file = e.dataTransfer.files[0];
    handleFileSelect(file);
  }, []);
  const handleFileSelect = (file) => {
    if (file) {
      setSelectedFile(file);
      const fileType = fileTypeMap[file.type];
      if (fileType) {
        setConvertOptions(fileType.options);
      } else {
        setConvertOptions([]);
      }
    }
  };
  const handleFileInput = (e) => {
    const file = e.target.files[0];
    handleFileSelect(file);
  };

  return (
    <div
      className={`w-3/5 h-60 ml-auto mr-auto mt-5 flex flex-col justify-center items-center rounded-lg border-dashed round-lg  border-2 ${
        dragActive ? "border-blue-500" : "border-gray-300"
      }`}
      onDragEnter={handleDrag}
      onDragLeave={handleDrag}
      onDragOver={handleDrag}
      onDrop={handleDrop}
    >
      <Upload />
      <p>
        Drag and drop your file here, or{" "}
        <label className="text-blue-500 hover:text-blue-600 cursor-pointer">
          browse
          <input
            type="file"
            className="hidden"
            onChange={handleFileInput}
            accept="image/*,video/*,audio/*,.pdf,.doc,.docx"
          />
        </label>
      </p>{" "}
    </div>
  );
}
