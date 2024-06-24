import React, { useState } from 'react';
import axios from 'axios';

const Upload = () => {
  const [file, setFile] = useState(null);
  const [metadata, setMetadata] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleMetadataChange = (e) => {
    setMetadata(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    formData.append('metadata', metadata);

    axios.post('http://localhost:5000/upload', formData)
      .then((response) => {
        alert(response.data.message);
      })
      .catch((error) => {
        console.error("There was an error uploading the file!", error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" onChange={handleFileChange} />
      <textarea value={metadata} onChange={handleMetadataChange} placeholder="Enter metadata in XML format"></textarea>
      <button type="submit">Upload</button>
    </form>
  );
};

export default Upload;
