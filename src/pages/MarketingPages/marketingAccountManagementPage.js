import React,{ Fragment, useState }  from "react";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import useAuthentication from "../../hooks/useAuthentication";
import useGetAllUsers from "../../hooks/data/get/useGetAllUsers";
import { Link } from "react-router-dom";
import useSuspendAccount from "../../hooks/data/post/useSuspendAccount";
import useDeleteAccount from "../../hooks/data/post/useDeleteAccount";
import HorizontalUserCard from "../../components/HorizontalCard/horizontalUserCard";
import TitleFade from "../../components/TitleFade/titleFade";
import Modal from "../../components/Modal/modal";
import Loader from "../../components/Loader/loader";
import { useNavigate} from 'react-router-dom';

const MarketingAccountManagementPage = () => {

    const {getUserInfosFromSessionStorage}=useAuthentication();
    const userInfos = getUserInfosFromSessionStorage();
    const navigate = useNavigate();
    const { handleSuspendAccount, alertBannerSuspendAccount }= useSuspendAccount();
    const { handleDeleteAccount, isLoadingDeleteAccount, alertBannerDeleteAccount }= useDeleteAccount();
    const { refetchUsersData, usersData, isLoadingUsers }=useGetAllUsers();

    const [isModalOpen, setIsModalOpen]=useState(null)

    const handleOpenModal = (value) => {
        setIsModalOpen(value);
    }
    const handleCloseModal = () => {
        setIsModalOpen(null);
    }


    return (
        <Fragment>
            <Header role={userInfos?.role}/>
            <div className="sm:w-3/4 m-auto pb-10 min-h-screen">
            {alertBannerDeleteAccount && alertBannerDeleteAccount}
            {alertBannerSuspendAccount && alertBannerSuspendAccount}
            <TitleFade title={"Gestion des comptes"}/>
            {!isLoadingUsers && usersData.map((user)=>{
            return(
                <Fragment>
                    <HorizontalUserCard
                        role={user.role} 
                        title={user.firstName + ' ' + user.lastName}
                        description={user.email}
                    >
                        <button 
                        className={`rounded-md mr-2 p-2 bg-blue-500 font-semibold text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
                        onClick={() => navigate(`modification/${user.id}`)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                            </svg>
                        </button>
                        <button
                            onClick={()=>handleSuspendAccount(user.id ,refetchUsersData)}
                            className={`rounded-md w-fit mr-2 p-2 ${user.isBlocked ? "bg-orange-500 hover:bg-orange-600" : "bg-light-green hover:bg-medium-green"} font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}

                        >
                            {user.isBlocked ?
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                            </svg>
                            :
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5V6.75a4.5 4.5 0 1 1 9 0v3.75M3.75 21.75h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H3.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                            </svg>
                            
                            }
                            
                        </button>
                        <button
                            onClick={()=>handleOpenModal(user.id)}
                            className={`rounded-md w-fit p-2 bg-red-500 font-semibold text-white shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                            </svg>
                        </button>
                    </HorizontalUserCard>
                    {isModalOpen && isModalOpen === user.id &&  
                        <Modal
                            title={`Êtes-vous sûr de vouloir supprimer le compte de ${user.firstName + ' ' + user.lastName} ?`}
                            handleOnCloseModal={handleCloseModal}
                        >
                            <button
                            type="button"
                            onClick={()=>handleCloseModal()}
                            className={` px-3 text-sm font-semibold shadow-sm hover:text-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 w-fit`}
                            >
                                Annuler
                            </button>
                            <button
                            type="button"
                            onClick={()=>{handleDeleteAccount(user.id, refetchUsersData)}}
                            className={`rounded-md bg-red-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 w-fit`}
                            >
                                {isLoadingDeleteAccount ? <Loader/> : "Supprimer"}
                            </button>
            
                        </Modal>}
                    </Fragment>
            )
            })}
            </div>
            <Footer/>
        </Fragment>
    )
}

export default MarketingAccountManagementPage;