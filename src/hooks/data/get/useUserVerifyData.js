import {axiosReq} from "../../utils/axios";

const useUserVerifyData = () => {

    let data = null;
    const getUserVerifyData = async () => {
        try {
            const response = await axiosReq.get(`${process.env.REACT_APP_API_PREFIX_AUTH}verify`);
            if (response) {
                data = response;
              }
          } catch (error) {
            data = 'expiré';
          }
    };

    getUserVerifyData();

    return {data};
}

export default useUserVerifyData;