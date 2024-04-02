import React from "react";
import Input from "../Input/input";
import logInFormData from "../../formData/logInFormData";
import useLogIn from "../../hooks/data/post/useLogIn";
import ButtonValidationForm from "../ButtonValidationForm/buttonValidationForm";

const LoginForm = () => {
 
  const{handleSubmit, isLoading, alertBanner}=useLogIn();

    return(
                <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                  {alertBanner && alertBanner}
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
                    <form action="#" method="POST" onSubmit={(e)=>{handleSubmit(e)}}>         
                     {logInFormData.map((input, index)=>(
                        <Input
                        title={input.title}
                        id={input.id}
                        type={input.type}
                        size={input.size}
                        key={index}
                        />
                      ))}
                      <ButtonValidationForm
                          isLoading={isLoading} 
                          isPasswordValid={true} 
                          size={"w-x-large"}   
                      />
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