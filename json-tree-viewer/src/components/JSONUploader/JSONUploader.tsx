import { ChangeEvent } from "react";
import "./JSONUploader.css";

const JSONUploader = ({
  label,
  onUpload,
}: {
  label: string;
  onUpload: (e: ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <>
      <input type="file" id="jsonUploader" accept=".json" onChange={onUpload} />
      <label htmlFor="jsonUploader">{label}</label>
    </>
  );
};

export default JSONUploader;
