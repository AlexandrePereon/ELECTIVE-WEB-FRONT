import React, {useState} from "react";
import axiosReq from "../../utils/axios";
import useDisplayAlert from '../../hooks/useDisplayAlert';
import useAuthentication from "../../hooks/useAuthentication";
import Loader from "../Loader/loader";

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
          }
        } catch (error) {
          setMessage({code : error.response.status, description : error.response.data.message});
          setIsLoading(false);
        }
      };
      
  useAuthentication(responseUserData);
  const {alertBanner}= useDisplayAlert(message);

    return(
              <>
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
                    <form className="space-y-6" action="#" method="POST" onSubmit={(e)=>{submitLoginForm(e)}}>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 ">
                          Email address
                        </label>
                        <div className="mt-2">
                          <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
          
                      <div>
                        <div className="flex items-center justify-between">
                          <label htmlFor="password" className="block text-sm font-medium leading-6 ">
                            Password
                          </label>
                          <div className="text-sm">
                            <a href="#" className="font-semibold text-green-500 hover:text-indigo-500">
                              Forgot password?
                            </a>
                          </div>
                        </div>
                        <div className="mt-2">
                          <input
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            required
                            className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
          
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
              </>
            )
}

export default LoginForm;