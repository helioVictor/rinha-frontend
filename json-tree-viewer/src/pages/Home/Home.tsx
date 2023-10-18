import { useState } from 'react';
import JSONUploader from '../../components/JSONUploader/JSONUploader';
import './Home.css';

const Home = () => {
  const [file, setFile] = useState<File | undefined>(undefined);
  const [jsonData, setJsonData] = useState<string | undefined>(undefined);

  if (file && jsonData) {
    return (
      <div className='file-container'>
        <div className='file-content-container'>
          {file && <h1>{file.name}</h1>}

          {jsonData && (
            <div className='json-tree-container'>
              <pre>
                <code>{JSON.stringify(jsonData, null, 2)}</code>
              </pre>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className='initial-content-container'>
      <h1>JSON Tree Viewer</h1>
      <p className='subtitle'>
        Simple JSON Viewer that runs completely on-client. No data exchange
      </p>

      <JSONUploader
        label='Load JSON'
        setFile={setFile}
        setJSONData={setJsonData}
      />
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
