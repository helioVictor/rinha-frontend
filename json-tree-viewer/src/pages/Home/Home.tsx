import JSONUploader from "../../components/JSONUploader/JSONUploader";
import "./Home.css";

const Home = () => {
  const onUploadJSON = () => {};
  return (
    <div className="container">
      <h1>JSON Tree Viewer</h1>
      <p className="subtitle">
        Simple JSON Viewer that runs completely on-client. No data exchange
      </p>

      <JSONUploader label="Load JSON" onUpload={onUploadJSON} />
      {/* 

      TODO: Add error message when an invalid file is inserted.
      
      <p className="error-message">
        Invalid file. Please load a valid JSON file.
      </p> 
      
      */}
    </div>
  );
};

export default Home;
