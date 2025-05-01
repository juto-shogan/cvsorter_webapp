import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload } from 'lucide-react';

function CVUpload() {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    // Handle file upload here
    console.log(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
      'application/msword': ['.doc'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
    },
    multiple: false,
  });

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-white">Upload your CV</h2>
        <p className="mt-1 text-sm text-gray-400">
          We'll analyze your CV and match you with the best suitable roles
        </p>
      </div>

      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-lg p-12 text-center cursor-pointer transition-colors duration-200 ${
          isDragActive
            ? 'border-purple-500 bg-purple-500/10'
            : 'border-purple-800 hover:border-purple-400'
        }`}
      >
        <input {...getInputProps()} />
        <Upload className="mx-auto h-12 w-12 text-purple-400" />
        <p className="mt-2 text-sm text-gray-400">
          {isDragActive
            ? 'Drop your CV here'
            : 'Drag and drop your CV here, or click to select file'}
        </p>
        <p className="mt-1 text-xs text-gray-500">
          Supported formats: PDF, DOC, DOCX
        </p>
      </div>
    </div>
  );
}

export default CVUpload;