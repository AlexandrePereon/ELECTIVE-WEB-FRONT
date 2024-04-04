import React,{ useEffect, useState }  from "react";
import FileUploader from "../../components/FileUploader/fileUploader";
import Tab from "../../components/Tab/tab";
import TitleFade from "../../components/TitleFade/titleFade";
import Collapse from "../../components/Collapse/collapse";
import Input from "../../components/Input/input";
import Loader from "../../components/Loader/loader";
import usePostRestaurantArticle from "../../hooks/data/post/usePostRestaurantArticle";
import usePostRestaurantMenu from "../../hooks/data/post/usePostRestaurantMenu";
import productFormData from "../../formData/productFormData";

const SubmissionTunnel = ({restaurantId}) => {
    const [steps, setSteps] = useState(0);
    const [submissionTunnelFormListArticle, setSubmissionTunnelFormListArticle] = useState([])
    const [submissionTunnelForm, setSubmissionTunnelForm] = useState(productFormData);

    useEffect(()=>{
        const updatedForm = submissionTunnelForm.map(field => {
            if (field.id === "article") {
                return { ...field, value: submissionTunnelFormListArticle };
            }
            return field;
        });
        setSubmissionTunnelForm(updatedForm);
    },[submissionTunnelFormListArticle])

    const handleInputChange = (value, id) => {
        const updatedForm = submissionTunnelForm.map(field => {
            if (field.id === id) {
                return { ...field, value: value };
            }
            return field;
        });
        setSubmissionTunnelForm(updatedForm);
    };

    const handleListArticleChange = (value,type, action) => {
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
        handleInputChange(submissionTunnelFormListArticle,"article")
    };

    const submissionTunnelFormInput = submissionTunnelForm.map((item, index)=>{
        let input = null;
        switch (item.type) {
            case 'image':
                input = <FileUploader handleOnChange={handleInputChange} id={item.id} key={index}/>
            break;
            case 'list':
                if (item.title[steps]) {
                    input =
                    <Collapse 
                    title={item.title[steps]} 
                    handleOnChange={handleListArticleChange} 
                    submissionTunnelFormListArticle={submissionTunnelFormListArticle}
                    restaurantId={restaurantId}
                    key={index}/>
                }
            break;
            default:
                input = <Input title={item.title[steps]} handleOnChange={handleInputChange} id={item.id} type={item.type} size={item.size} key={index}/>
            break;
        }
        return input;
    })

    const handleOnSwitchSteps = (index) => {
        setSteps(index)
    }

    const {handleSubmitArticle, isLoadingArticle, alertBannerArticle} = usePostRestaurantArticle();
    const {handleSubmitMenu, isLoadingMenu, alertBannerMenu} = usePostRestaurantMenu();
    const alertBanner = alertBannerArticle||alertBannerMenu;
    const isLoading = isLoadingArticle||isLoadingMenu;

    const submitRestaurantProduct = (type, e) => {
        e.preventDefault();
        if (type === 0) {
            handleSubmitArticle(submissionTunnelForm)
        } else {
            handleSubmitMenu(submissionTunnelForm)
        }
    }

    return (
        <form onSubmit={(e)=>submitRestaurantProduct(steps, e)}>
            {alertBanner && alertBanner}
            <Tab steps={steps} partsName={['Ajouter Article','Ajouter Menu']} handleOnSwitchSteps={handleOnSwitchSteps}/>
            <TitleFade title={steps === 0 ? 'Ajouter Article' : 'Ajouter Menu'}/>
            {submissionTunnelFormInput}
            <button
            type="submit"
            className="rounded-md bg-green-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            disabled={isLoading}
            >
            {isLoading ? <Loader/> : 'Save'} 
            </button>
        </form>
    )
}

export default SubmissionTunnel;