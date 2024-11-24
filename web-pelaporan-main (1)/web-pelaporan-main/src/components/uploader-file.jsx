import { useEffect, useState } from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { MdClear } from "react-icons/md";

// eslint-disable-next-line react/prop-types
const DragNdrop = ({ onFilesSelected, width, height }) => {
  const [files, setFiles] = useState([]);
  const [previewUrls, setPreviewUrls] = useState([]);

  const handleFileChange = (event) => {
    const selectedFiles = event.target.files;
    if (selectedFiles && selectedFiles.length > 0) {
      const newFiles = Array.from(selectedFiles);
      setFiles((prevFiles) => [...prevFiles, ...newFiles]);
      const newPreviewUrls = newFiles.map((file) => URL.createObjectURL(file));
      setPreviewUrls((prevUrls) => [...prevUrls, ...newPreviewUrls]);
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const droppedFiles = event.dataTransfer.files;
    if (droppedFiles.length > 0) {
      const newFiles = Array.from(droppedFiles);
      setFiles((prevFiles) => [...prevFiles, ...newFiles]);
      const newPreviewUrls = newFiles.map((file) => URL.createObjectURL(file));
      setPreviewUrls((prevUrls) => [...prevUrls, ...newPreviewUrls]);
    }
  };

  const handleRemoveFile = (index) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
    setPreviewUrls((prevUrls) => prevUrls.filter((_, i) => i !== index));
  };

  useEffect(() => {
    onFilesSelected(files);
    // Clean up object URLs when component unmounts or files change
    return () => {
      previewUrls.forEach((url) => URL.revokeObjectURL(url));
    };
  }, [files, previewUrls, onFilesSelected]);

  return (
    <section className="drag-drop" style={{ width: width, height: height }}>
      <div
        className={`document-uploader ${
          files.length > 0 ? "upload-box active" : "upload-box"
        }`}
        onDrop={handleDrop}
        onDragOver={(event) => event.preventDefault()}
      >
        <div className="flex flex-col w-full items-start">
          <div className="upload-info">
            <div>
              <p className="text-netral-grey text-body-regular-16 !font-medium">
                Seret dan lepaskan gambar di sini.
              </p>
            </div>
          </div>
          <input
            type="file"
            hidden
            id="browse"
            onChange={handleFileChange}
            accept=".png,.jpg,.webp,.jpeg"
            multiple
          />
          <label
            htmlFor="browse"
            className="browse-btn text-primary-tint-1 py-1 px-3 rounded-md !bg-primary-tint-5"
          >
            Pilih gambar
          </label>
        </div>

        {files.length > 0 && (
          <div className="file-list">
            <div className="file-list__container">
              {files.map((file, index) => (
                <div className="file-item" key={index}>
                  <div className="file-preview">
                    <img
                      src={previewUrls[index]}
                      alt={`Preview ${index}`}
                      className="preview-image"
                    />
                  </div>
                  <div className="file-info">
                    <p>{file.name}</p>
                  </div>
                  <div className="file-actions">
                    <MdClear onClick={() => handleRemoveFile(index)} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {files.length > 0 && (
          <div className="success-file">
            <AiOutlineCheckCircle
              style={{ color: "#6DC24B", marginRight: 1 }}
            />
            <p>{files.length} file dipilih</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default DragNdrop;
