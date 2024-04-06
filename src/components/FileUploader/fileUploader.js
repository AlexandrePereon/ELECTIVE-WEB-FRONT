
import React,{useState} from 'react';

const FileUploader = ({imagePreviewModification, handleOnChange, id}) => {

    const [base64Image, setBase64Image] = useState(imagePreviewModification || '');

    const handleImageChange = (event, id) => {
    const file = event.target.files[0];
    
    if (file) {
      const reader = new FileReader();    
      reader.onloadend = () => {
       setBase64Image(reader.result);
       handleOnChange(reader.result.split(';base64,')[1], id)
      };
      reader.readAsDataURL(file);
  } else {
      console.error('No file selected.');
  }

  };

  return (
    <div>
       {base64Image ? 
          <img src={base64Image} alt="Prévisualisation de l'image" className="rounded-full max-w-full max-h-48 m-auto" />
        :
          <img src="https://forma-btp.com/annuaire/content/img/form/default_profil.webp" alt="Prévisualisation de l'image" className="rounded-full max-w-full max-h-48 m-auto"/>
      }
      <input type="file" className="m-auto" accept="image/*" onChange={(e)=>{handleImageChange(e, id)}} id={id}/>
    </div>
  );
};

export default FileUploader;