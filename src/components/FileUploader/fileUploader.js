
import React,{useState} from 'react';

const FileUploader = ({handleOnChange, id}) => {

    const [base64Image, setBase64Image] = useState('');

    const handleImageChange = (event, id) => {
    const file = event.target.files[0];
    
    if (file) {
      const reader = new FileReader();    
      reader.onloadend = () => {
        setBase64Image(reader.result);
        handleOnChange(reader.result, id)
      };
      reader.readAsDataURL(file);
  } else {
      console.error('No file selected.');
  }

  };

  return (
    <div>
       {base64Image ? 
          <img src={base64Image} alt="Prévisualisation de l'image" className="rounded-full max-w-full max-h-48" />
        :
          <img src="https://forma-btp.com/annuaire/content/img/form/default_profil.webp" alt="Prévisualisation de l'image" className="rounded-full max-w-full max-h-48"/>
      }
      <input type="file" accept="image/*" onChange={(e)=>{handleImageChange(e, id)}} id={id}/>
    </div>
  );
};

export default FileUploader;