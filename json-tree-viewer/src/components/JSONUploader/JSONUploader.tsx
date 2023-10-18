import { ChangeEvent } from 'react';
import './JSONUploader.css';

const JSONUploader = ({
  label,
  setFile,
  setJSONData,
}: {
  label: string;
  setFile: (file?: File) => void;
  setJSONData: (data?: string) => void;
}) => {
  const handleFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = event.target.files?.[0];
    setFile(uploadedFile);

    // Read the JSON content
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const parsedJson = JSON.parse(String(e.target?.result));
        setJSONData(parsedJson);
      } catch (error) {
        console.error('Error parsing JSON:', error);
      }
    };
    reader.readAsText(uploadedFile || new Blob());
  };
  return (
    <>
      <input
        type='file'
        id='jsonUploader'
        accept='.json'
        onChange={handleFileUpload}
      />
      <label htmlFor='jsonUploader'>{label}</label>
    </>
  );
};

export default JSONUploader;
