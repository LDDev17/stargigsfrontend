import React, { useState } from 'react';
import './uploadmedia.css'; // Assuming you have a CSS file for styling

const UploadMedia = () => {
  const [files, setFiles] = useState<File[]>([]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFiles(Array.from(event.target.files));
    }
  };

  const handleUpload = () => {
    // Upload logic using the files state
    console.log('Uploading files:', files);
  };

  return (
    <div>
      <div className="self-start mt-6 text-sm leading-none text-black">
        Upload Image/Video
      </div>
      <div className="flex gap-4 px-8 py-5 mt-1.5 rounded-xl max-md:px-5">
        <img
          loading="lazy"
          src="upload.png"
          className="object-contain shrink-0 self-start aspect-square w-[45px]"
        />
        <div className="flex flex-col grow shrink-0 basis-0 w-fit">
          <div className="text-base leading-loose text-neutral-800">
            Drop image/video or click to <span className="text-orange-600">upload</span>
          </div>
          <div className="self-start text-sm leading-none text-neutral-400">
            Supports: .jpg, .png, .mp4
          </div>
        </div>
      </div>
      <div className="self-start mt-9 text-sm leading-none text-black">
        Upload Thumbnail
      </div>
      <div className="flex gap-4 py-5 pr-20 pl-6 mt-1.5 rounded-xl max-md:px-5">
        <img
          loading="lazy"
          src="upload.png"
          className="object-contain shrink-0 self-start aspect-square w-[45px]"
        />
        <div className="flex flex-col">
          <div className="text-base leading-loose text-neutral-800">
            Drop image or click to <span className="text-orange-600">upload</span>
          </div>
          <div className="self-start text-sm leading-none text-neutral-400">
            Supports: .jpg, .png
          </div>
        </div>
      </div>
      <input type="file" multiple onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default UploadMedia;
