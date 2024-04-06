import React, {useState} from "react";
import BrandCard from "../BrandCard/brandCard";
import AddNumberButton from "../AddNumberButton/addNumberButton";
import Loader from "../Loader/loader";
import Pagination from "../Pagination/pagination";
import useGetAllArticlesFromRestaurant from "../../hooks/data/get/useGetAllArticlesFromRestaurant";


const Collapse = ({title, handleOnChange, submissionTunnelFormListArticle, restaurantId}) => {
    const [paginationArticles, setPaginationArticles]=useState(1)

    const handleSetPagination = (value, type) => {
     if((value>0) && (value<=maxPageArticles)){
        type === "articles" &&  setPaginationArticles(value)
            
         }
    }
    
    const {articlesData, isLoadingArticles, maxPageArticles} = useGetAllArticlesFromRestaurant(restaurantId,paginationArticles);
    const articlesList = articlesData ? 
        articlesData.map((article, index) =>(
            <BrandCard 
                image={article.image}
                name={article.name}
                price={article.price}
                id={article._id}
                key={index}
            >
                <AddNumberButton 
                    handleOnChange={handleOnChange} 
                    value={article._id} 
                    numberOfArticle={submissionTunnelFormListArticle.filter(id => id === article._id).length}
                    type="articles"
                />
            </BrandCard>))
        :
        <p>Aucun article</p> 
    
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
                articlesList
                }
                {articlesData && <Pagination 
                    pagination={paginationArticles} 
                    handleSetPagination={handleSetPagination}
                    maxPagination={maxPageArticles}
                    type={"articles"}
                />}
           
            </div>
        </div>
    );
}

export default Collapse;