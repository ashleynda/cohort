import React, { ChangeEvent, DragEvent, useRef, useState } from 'react';

interface DragAndDropProps {
  onFileUpload: (file: File) => void;
  onFileClear: () => void; 
}

const DragAndDrop: React.FC<DragAndDropProps> = ({ onFileUpload, onFileClear }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation(); 
    
    const files = event.dataTransfer?.files; 
    
    if (files && files.length > 0) {
      const file = files[0];
      setSelectedFile(file);
      onFileUpload(file);
    }
  };
  

  const handleFileInput = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      setSelectedFile(file);
      onFileUpload(file);
    }
  };

  const handleChooseFileClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleClearFile = () => {
    setSelectedFile(null);
    onFileClear();
  };
  
  return (
    <div
      className='flex flex-col items-center justify-center border-dotted border-2  p-4 rounded-lg h-[119px]'
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
      style={{ position: 'relative' }}
    >
      <input
        type="file"
        onChange={handleFileInput}
        ref={fileInputRef}
        style={{ display: 'none' }} 
      />
      {selectedFile ? (
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
          <img 
            src={URL.createObjectURL(selectedFile)} 
            alt="Selected File" 
            style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
          />
          <div className='flex gap-2'>
            <button onClick={handleClearFile} style={{color: 'black', fontFamily: 'DM Sans'}}>Cancel</button>
            <button onClick={handleChooseFileClick} style={{color: 'black', fontFamily: 'DM Sans'}}>Replace</button>
          </div>
        </div>
      ) : (
        <p style={{fontSize: '12px', fontWeight: '500', fontFamily: 'DM Sans', color: '#2B1C1C', textAlign: 'center'}}>
          Drag and drop or 
          <label
            htmlFor="fileInput"
            style={{ cursor: 'pointer', fontSize: '12px', fontWeight: '500', fontFamily: 'DM Sans', color: '#1C8AEC' }}
            onClick={handleChooseFileClick}
          >
            choose a file
          </label>
        </p>
      )}
    </div>
  );
};

export default DragAndDrop;



