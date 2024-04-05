import {getTokenFromSessionStorage} from "../utils/axios";


/**
 * Hook useNotificationSeen post data.
 * 
 * @typedef useWebSocket
 * @kind hook
 * 
 * @returns {object} - 
 */
const useWebSocket = (link) => {

    const websocketUrl = `ws://app.localhost${link}?socketToken=${getTokenFromSessionStorage()}`;
    const socket = new WebSocket(websocketUrl)

    return {socket};
};

export default useWebSocket;