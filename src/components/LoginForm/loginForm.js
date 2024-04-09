import React from "react";
import Input from "../Input/input";
import logInFormData from "../../formData/logInFormData";
import useLogIn from "../../hooks/data/post/useLogIn";
import ButtonValidationForm from "../ButtonValidationForm/buttonValidationForm";

const LoginForm = () => {
 
  const{handleSubmit, isLoading, alertBanner}=useLogIn();

    return(
                <div className="flex min-h-full flex-1 flex-col justify-center px-6 lg:px-8">
                  <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-sm">
                  {alertBanner && alertBanner}
                    <form action="#" method="POST" onSubmit={(e)=>{handleSubmit(e)}}>    
                    <div className="border-b border-gray-900/10 pb-2">     
                      {logInFormData.map((input, index)=>(
                          <Input
                          title={input.title}
                          id={input.id}
                          type={input.type}
                          size={input.size}
                          isRequired={input.isRequired}
                          key={index}
                          />
                        ))}
                      </div>
                      <div className="pt-2">
                        <ButtonValidationForm
                            isLoading={isLoading} 
                            isPasswordValid={true} 
                            size={"w-x-large"}
                            title={"Connexion"}   
                        />
                      </div>
                    </form>
                  </div>
                </div>
            )
}

export default LoginForm;