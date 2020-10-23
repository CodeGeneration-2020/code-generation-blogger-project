import React from 'react';

const FileLoader = ({ allowedFormats, id, handleSaveFile }) => {
  const handleChange = event => {
    const fileUploaded = event.target.files[0];
    if (
      fileUploaded &&
      allowedFormats.length &&
      allowedFormats.indexOf(fileUploaded.type) === -1
    ) {
      return false;
    }
    handleSaveFile(fileUploaded);
  };
  return (
    <input
      value=""
      type="file"
      id={id}
      onChange={handleChange}
      style={{ display: 'none' }}
    />
  );
};

export default FileLoader;
