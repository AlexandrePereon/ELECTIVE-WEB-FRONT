import React from "react";
import BrandCard from "../BrandCard/brandCard";
import AddNumberButton from "../AddNumberButton/addNumberButton";
import Loader from "../Loader/loader";
import useGetAllArticlesFromRestaurant from "../../hooks/data/get/useGetAllArticlesFromRestaurant";


const Collapse = ({title, handleOnChange, submissionTunnelFormListArticle}) => {
    const {articlesData, isLoadingArticles} = useGetAllArticlesFromRestaurant("6602d35f54f5df2e0bcf7fe9");
    return(
        <div className="collapse collapse-plus rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default sm:px-7.5 xl:pb-1">
            <input type="checkbox" /> 
            <div className="collapse-title mb-6 text-xl font-semibold text-black">
                {title}
            </div>
            <div className="collapse-content"> 
            {isLoadingArticles ?
                <Loader/>
                :
                articlesData && articlesData.map((article, index) =>(
                    <BrandCard 
                        image={article.image}
                        name={article.name}
                        price={article.price}
                        id={article._id}
                        key={index}
                    >
                        <AddNumberButton handleOnChange={handleOnChange} value={article._id} numberOfArticle={submissionTunnelFormListArticle.filter(id => id === article._id).length}/>
                    </BrandCard>
                ))
        }
           
            </div>
        </div>
    );
}

export default Collapse;