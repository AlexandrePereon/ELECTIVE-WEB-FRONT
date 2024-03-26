import AlertBannerSuccess from '../components/AlertBanner/alertBannerSuccess'
import AlertBannerError from '../components/AlertBanner/alertBannerError'

/**
 * Hook display alert.
 * 
 * @typedef useDisplayAlert
 * @kind hook
 * 
 * @param {Object} props - Les propriétés du composant.
 * @param {string} props.message - Message reçu de la requête.
 * @returns {React.JSX.Element} - Le composant d'alert correspondant.
 */
const useDisplayAlert = (message) => {
    let alertBanner = null; 

    if((200 <= message.code) && (message.code<300)){
        alertBanner = <AlertBannerSuccess description={message.description}/>
    }
    else if((400 <= message.code) && (message.code<500)){
        alertBanner = <AlertBannerError description={message.description}/>
    };

    return {alertBanner};
}

export default useDisplayAlert;