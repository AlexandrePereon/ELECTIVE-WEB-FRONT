import React,{ useState }  from "react";
import FileUploader from "../../components/FileUploader/fileUploader";
import Collapse from "../../components/Collapse/collapse";
import Input from "../../components/Input/input";
import ButtonValidationForm from "../ButtonValidationForm/buttonValidationForm";


const ModificationProductForm = ({restaurantId, productData, formData, handleSetImageValue, handleSubmit, imageValue}) => {
    const [submissionTunnelFormListArticle, setSubmissionTunnelFormListArticle] = useState(productData?.articles?.map(article => article._id))

    const handleListArticleChange = (value, type, action) => {
        if (action === "add" && type==="articles"){
            setSubmissionTunnelFormListArticle(prevList => [...prevList, value]);
        } else if (action === "remove" && type==="articles"){
            setSubmissionTunnelFormListArticle(prevList => 
                {
                    const index = prevList.indexOf(value);
                    if (index !== -1) {
                        const newList = [...prevList];
                        newList.splice(index, 1);
                        return newList;
                    }
                    return prevList;
                });
        }
    };

    const modificationProductFormInput = formData.map((item, index)=>{
        let input = null;
        switch (item.type) {
            case 'image':
                input = <FileUploader 
                            imagePreviewModification={productData && productData[item.id]}
                            handleOnChange={handleSetImageValue} 
                            id={item.id} 
                            key={index}
                        />
            break;
            case 'list':
                input =
                    <Collapse 
                    title={item.title} 
                    handleOnChange={handleListArticleChange} 
                    submissionTunnelFormListArticle={submissionTunnelFormListArticle}
                    restaurantId={restaurantId}
                    key={index}/>
            break;
            default:
                input = 
                    <Input 
                        title={item.title} 
                        id={item.id} 
                        type={item.type} 
                        size={item.size}
                        defaultValue={productData && productData[item.id]}
                        key={index}
                    />
            break;
        }
        return input;
    })

    return (
            <form onSubmit={(e)=>handleSubmit(e, productData._id, imageValue, submissionTunnelFormListArticle)} className="border-b border-gray-900/10 pb-2">
                {/* {alertBanner && alertBanner} */}
                {modificationProductFormInput}
                <div className="mt-6 flex items-center justify-end gap-x-6 pb-2">
                    <ButtonValidationForm size={"w-small"} title={"Valider"}/>
                </div>
            </form>
    )
}

export default ModificationProductForm;