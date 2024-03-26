import React,{ useState }  from "react";
import FileUploader from "../../components/FileUploader/fileUploader";
import Tab from "../../components/Tab/tab";
import TitleFade from "../../components/TitleFade/titleFade";
import BrandList from "../../components/BrandList/brandlist";
import Collapse from "../../components/Collapse/collapse";

const SubmissionTunnel = () => {
    const [steps, setSteps] = useState(0);
    const submissionTunnelForm = [
        {
        titre : ['ajouter une image à votre article','ajouter une image à votre menu'],
        type : "image"},
        {
        titre : ['Titre de votre article','Titre de votre menu'],
        type : "string"},
        {
        titre : ['Description de votre article','Description de votre menu'],
        type : "string"},
        {
        titre : ['Prix de votre article','Prix de votre menu'],
        type : "number"},
        {
        titre : [null ,'Liste des articles'],
        type : "object"}
    ]
    
    const submissionTunnelFormInput = submissionTunnelForm.map((item, index)=>{
        let input = null;
        switch (item.type) {
            case 'number':
                input = 
                <div className="sm:col-span-3">
                <label htmlFor="first-name" className="block text-sm font-medium leading-6 ">
                    {item.titre[steps]}
                </label>
                <div className="mt-2">
                    <input
                    type="number"
                    name="firstName"
                    id="firstName"
                    autoComplete="givenName"
                    className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
            </div>
                break;
            case 'image':
                input = <FileUploader/>
            break;
            case 'object':
                if (item.titre[steps]) {
                    input = <Collapse title={"Liste d'articles"}><button onClick={()=>{console.log("ajouté")}}>ADD</button></Collapse>
                }
            break;
            default:
                input = 
                <div className="sm:col-span-3">
                    <label htmlFor="first-name" className="block text-sm font-medium leading-6 ">
                        {item.titre[steps]}
                    </label>
                    <div className="mt-2">
                        <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        autoComplete="givenName"
                        className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>
            break;
        }
        return input;
    })

    const handleOnSwitchSteps = (index) => {
        setSteps(index)
    }
    return (
        <div className="bg-white">
            <Tab steps={steps} partsName={['Ajouter Article','Ajouter Menu']} handleOnSwitchSteps={handleOnSwitchSteps}/>
            <TitleFade title={steps === 0 ? 'Ajouter Article' : 'Ajouter Menu'}/>
            {submissionTunnelFormInput}
        </div>
    )
}

export default SubmissionTunnel;