import React, {useState} from "react";
import axiosReq from "../../utils/axios";
import useDisplayAlert from '../../hooks/useDisplayAlert';
import useAuthentication from "../../hooks/useAuthentication";
import Loader from "../Loader/loader";
import Input from "../Input/input";
import logInFormData from "../../formData/logInFormData";

const LoginForm = () => {
 
  const [isLoading, setIsLoading] = useState(false);

  const [message, setMessage] = useState({code : null, description : null});
  const [responseUserData, setResponseUserData] = useState(null);

    const submitLoginForm = async (e) => {
      e.preventDefault();
      setIsLoading(true);
      try {
          const response = await axiosReq.post("/auth/login", {
              email: e.target.elements.email.value,
              password: e.target.elements.password.value
          })
          if (response) {
            setMessage({code : response.status, description : response.data.message});
            setIsLoading(false);
            setResponseUserData(response.data)
            window.location.href = `/${response.data.user.role}-accueil`;
          }
        } catch (error) {
          setMessage({code : error.response.status, description : error.response.data.message});
          setIsLoading(false);
        }
      };
      
  useAuthentication(responseUserData);
  const {alertBanner}= useDisplayAlert(message);

    return(
                <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                  {message && alertBanner}
                    <a href="/">
                      <img
                        className="mx-auto h-10 w-auto"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                        alt="Your Company"
                      />
                    </a>
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight ">
                      Sign in to your account
                    </h2>
                  </div>
                  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form action="#" method="POST" onSubmit={(e)=>{submitLoginForm(e)}}>         
                     {logInFormData.map((input, index)=>(
                      <Input
                      title={input.title}
                      handleOnChange={console.log("")}
                      id={input.id}
                      type={input.type}
                      size={input.size}
                      key={index}
                      />
                     ))}
                       <div>
                        <button
                          type="submit"
                          className="flex w-full justify-center rounded-md bg-green-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                          disabled={isLoading}
                        >
                          {isLoading ? <Loader/> : 'Sign in'}
                        </button>
                      </div> 
                      
                    </form>
          
                    <p className="mt-10 text-center text-sm text-gray-500">
                      Not a member?{' '}
                      <a href="/signup" className="font-semibold leading-6 text-green-500 hover:text-indigo-500">
                        Sign up
                      </a>
                    </p>
                  </div>
                </div>
            )
}

export default LoginForm;