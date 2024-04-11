import React,{ Fragment, useState}  from "react";
import CardList from "../components/CardList/cardList";
import useAuthentication from "../hooks/useAuthentication";
import Header from "../components/Header/header";
import TitleFade from "../components/TitleFade/titleFade";
import useGetAllRestaurants from "../hooks/data/get/useGetAllRestaurants";
import Card from "../components/Card/card";
import Skeleton from "../components/Skeleton/skeleton";
import { Link } from 'react-router-dom';
import Footer from "../components/Footer/footer";

const RestaurantsSelectionPage = () => {
    
    const {getUserInfosFromSessionStorage}=useAuthentication();
    const userInfos = getUserInfosFromSessionStorage();

    const [pagination, setPagination]=useState(1)  
    
    const {restaurantsData, isLoadingRestaurants, maxPageRestaurants} = useGetAllRestaurants(pagination);
    
    const handleSetPagination = (value) => {
        if((value>0) && (value<=maxPageRestaurants)){
            setPagination(value)
        }
    }

    return (
        <Fragment>
            <Header role={userInfos?.role}/>
                    <div className="h-screen sm:w-page m-auto pb-10">
                        <TitleFade title="Page restaurants :"/>
                    
                    <CardList 
                        cardData={restaurantsData} 
                        isLoading={isLoadingRestaurants}
                        pagination={pagination}
                        maxPagination={maxPageRestaurants}
                        handleSetPagination={handleSetPagination}
                        type="articles"
                    >  
                        {isLoadingRestaurants ?
                            <Skeleton/> :
                            restaurantsData && restaurantsData.map((item, index)=>
                            <Card
                            title={item.name}
                            description={item.description.length > 100 ? item.description.substring(0, 100) + "..." : item.description}
                            image={item.image}
                            key={index}
                            >
                                <Link to={`/user-accueil/restaurant/${item._id}`}>voir plus</Link>
                            </Card>)} 
                    </CardList>
                    </div>
            <Footer/>
        </Fragment>
    )
}

export default RestaurantsSelectionPage;