import {axiosReq} from "../../utils/axios";

const useUserVerifyData = () => {

    let data = null;
    const getUserVerifyData = async () => {
        try {
            const response = await axiosReq.get("/auth/verify");
            if (response) {
                data = response;
              }
          } catch (error) {
            console.log(error)
            data = 'expiré';
          }
    };

    getUserVerifyData();

    return {data};
}

export default useUserVerifyData;