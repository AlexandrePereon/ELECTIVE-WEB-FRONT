
import React,{useState} from 'react';

const FileUploader = () => {

    const [base64Image, setBase64Image] = useState('');

    const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
        setBase64Image(reader.result);
        const base64String = reader.result;
        console.log('Image encodée en base 64 :', base64String);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div>
       {base64Image && (
        <div>
          <h2>Prévisualisation de l'image :</h2>
          <img src={base64Image} alt="Prévisualisation de l'image" style={{ maxWidth: '100%', maxHeight: '200px' }} />
        </div>
      )}
      <h1>Uploader une image</h1>
      <input type="file" accept="image/*" onChange={(e)=>{handleImageChange(e)}} />
    </div>
  );
};

export default FileUploader;