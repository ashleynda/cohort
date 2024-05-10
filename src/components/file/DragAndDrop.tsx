import React, { ChangeEvent, DragEvent, useRef } from 'react';

interface DragAndDropProps {
  onFileUpload: (file: File) => void;
  onFileClear: () => void; 
}

const DragAndDrop: React.FC<DragAndDropProps> = ({ onFileUpload }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation(); // Prevent event propagation to parent elements
    
    const files = event.dataTransfer?.files; // Use optional chaining to access nested properties
    
    if (files && files.length > 0) {
      const file = files[0];
      onFileUpload(file);
    }
  };
  

  const handleFileInput = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      onFileUpload(file);
    }
  };

  const handleChooseFileClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleDocumentDragOver = (event: Event) => {
    event.preventDefault();
    event.stopPropagation();
  };
  
  React.useEffect(() => {
    document.addEventListener('dragover', handleDocumentDragOver);
    return () => {
      document.removeEventListener('dragover', handleDocumentDragOver);
    };
  }, []);


  return (
    <div
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
    >
      <input
        type="file"
        onChange={handleFileInput}
        ref={fileInputRef}
        style={{ display: 'none' }} 
      />
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
    </div>
  );
};

export default DragAndDrop;
