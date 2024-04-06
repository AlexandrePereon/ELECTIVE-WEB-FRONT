import React,{ Fragment, useState }  from "react";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import useAuthentication from "../../hooks/useAuthentication";
import ModificationProductForm from "../../components/ModificationProductForm/modificationProductForm";
import articleFormData from "../../formData/articleFormData";
import menuFormData from "../../formData/menuFormData";
import { useParams } from "react-router";
import useGetArticleById from "../../hooks/data/get/useGetArticleById";
import Loader from "../../components/Loader/loader";
import useModifiedArticle from "../../hooks/data/post/useModifiedArticle";


const ModificationProductPage = ({elementType}) => {
    const {getUserInfosFromSessionStorage}=useAuthentication();
    const userInfos = getUserInfosFromSessionStorage();
    const { id } = useParams();

    
    const {articleData, isLoadingArticle}=useGetArticleById(id) 
    const { handleSubmitArticleModification, isLoading, alertBanner } = useModifiedArticle();

    let form = null;
    let productData = null;
    let handleSubmit = null;
    if (elementType=== "menu") {
        form = menuFormData
    }else{
        form = articleFormData;
        productData = articleData;
        handleSubmit = handleSubmitArticleModification;
    }
    
    const [imageValue, setImageValue] = useState(productData && productData.image);
    const handleSetImageValue = (value) => {
        setImageValue(value)
    }

    return (
        <Fragment>
            <Header role={userInfos?.role}/>
            {isLoadingArticle ? <Loader/>:
            <ModificationProductForm 
                formData={form} 
                productData={productData} 
                restaurantId={userInfos?.restaurantId}
                handleSetImageValue={handleSetImageValue}
                handleSubmit={handleSubmit}
                imageValue={imageValue}
                productId={id}
            />}
            <Footer/>
        </Fragment>
    )
}

export default ModificationProductPage;